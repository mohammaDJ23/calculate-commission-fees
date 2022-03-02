const Weeks = require("./weeks");

module.exports = class Commission extends Weeks {
  constructor(fees) {
    super();

    this.fees = fees;
  }

  static build(fees) {
    return new Commission(fees);
  }

  cashIn(obj) {
    const { percents, max } = this.fees.cashIn;

    const fee = obj.operation.amount * (percents / 100);

    console.log(fee.min(max.amount).toFixed(2));
  }

  legalPerson(obj) {
    const { percents, min } = this.fees.cashOutJuridical;

    const fee = obj.operation.amount * (percents / 100);

    console.log(fee.max(min.amount).toFixed(2));
  }

  naturalPerson(obj) {
    const weekAmount = this.getWeekAmount(this.getUniqueKey(obj));
    const amount = obj.operation.amount;
    const { percents, week_limit } = this.fees.cashOutNatural;
    const percent = percents / 100;
    const weekLimit = week_limit.amount;

    if (weekAmount > weekLimit) {
      if (amount > weekLimit) {
        console.log(((amount - weekLimit) * percent).toFixed(2));
      } else {
        console.log((amount * percent).toFixed(2));
      }
    } else {
      console.log((0).toFixed(2));
    }
  }

  cashOut(obj) {
    switch (obj.user_type) {
      case "natural":
        this.naturalPerson(obj);

        break;

      case "juridical":
        this.legalPerson(obj);

        break;

      default:
        throw new Error("Invalid user type");
    }
  }

  calculate(data) {
    for (const obj of data) {
      if (obj.type === "cash_out" && obj.user_type === "natural") {
        this.calculateWeek(obj);
      }
    }

    for (const obj of data) {
      switch (obj.type) {
        case "cash_out":
          this.cashOut(obj);

          break;

        case "cash_in":
          this.cashIn(obj);

          break;

        default:
          throw new Error("Invalid operation type");
      }
    }
  }
};
