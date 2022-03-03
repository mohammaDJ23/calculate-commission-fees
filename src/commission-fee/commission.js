const Weeks = require("./weeks");

const { USERS, OPERATIONS } = require("../helpers/types");

const { NATURAL, JURIDICAL } = USERS;
const { CASH_IN, CASH_OUT } = OPERATIONS;

module.exports = class Commission extends Weeks {
  constructor({ data = [], fees = {} }) {
    super();

    this.data = data;
    this.fees = fees;

    // final results would be here

    this.results = [];
  }

  static build({ data, fees }) {
    return new Commission({ data, fees });
  }

  weeksAmounts() {
    for (const obj of this.data) {
      this.calculateWeekAmount(obj);
    }
  }

  cashIn(obj) {
    const { percents, max } = this.fees.cashIn;

    const fee = obj.operation.amount * (percents / 100);

    return fee.min(max.amount).toFixed(2);
  }

  legalPerson(obj) {
    const { percents, min } = this.fees.cashOutJuridical;

    const fee = obj.operation.amount * (percents / 100);

    return fee.max(min.amount).toFixed(2);
  }

  naturalPerson(obj) {
    // get week amount of natural user with cash_out type

    const weekAmount = this.getWeekAmount(this.getUniqueKey(obj));

    const { amount } = obj.operation;

    const { percents, week_limit } = this.fees.cashOutNatural;

    const percent = percents / 100;
    const weekLimit = week_limit.amount;

    if (weekAmount > weekLimit) {
      // if weekAmount of the user was grater than weekLimit

      if (amount > weekLimit) {
        // calculating exceeded amount

        return ((amount - weekLimit) * percent).toFixed(2);
      } else {
        return (amount * percent).toFixed(2);
      }
    } else {
      // if weekAmount of the user was less than weekLimit
      // we don't calculate the commission fee

      return (0).toFixed(2);
    }
  }

  cashOut(obj) {
    switch (obj.user_type) {
      case NATURAL:
        return this.naturalPerson(obj);

      case JURIDICAL:
        return this.legalPerson(obj);

      default:
        throw new Error("Invalid user type");
    }
  }

  compare(obj) {
    switch (obj.type) {
      case CASH_OUT:
        return this.cashOut(obj);

      case CASH_IN:
        return this.cashIn(obj);

      default:
        throw new Error("Invalid operation type");
    }
  }

  getCommission() {
    // getting weekly amounts of all users based on unique id
    // before getting commission fees

    this.weeksAmounts();

    for (const obj of this.data) {
      this.results.push(this.compare(obj));
    }

    return this.results;
  }
};
