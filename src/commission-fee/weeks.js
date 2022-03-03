/**
 *
 *  this class wil calculate total amounts per meek for each users by a unique id
 *
 *  for instance:
 *
 *  [{
 *    "date": "2016-01-06",
 *    "user_id": 1,
 *    "user_type": "natural",
 *    "type": "cash_out",
 *    "operation": { "amount": 30000, "currency": "EUR" }
 *  },
 *  {
 *    "date": "2016-01-07",
 *    "user_id": 1,
 *    "user_type": "natural",
 *    "type": "cash_out",
 *    "operation": { "amount": 1000, "currency": "EUR" }
 *  }]
 *
 *  1_1_natural_cash_out => 31000
 *
 *  with this structure you can use it to calculate total amounts for a week
 *  for any operations and user_types.
 *
 *  (to realize the id see getUniqueKey method in this class)
 *
 */

module.exports = class Weeks {
  constructor() {
    this.weeks = new Map();
  }

  getUniqueKey({ date, user_id, user_type, type }) {
    return `${new Date(date).getWeek()}_${user_id}_${user_type}_${type}`;
  }

  getWeekAmount(uniqueKey) {
    return this.weeks.get(uniqueKey);
  }

  setWeekAmount(key, val) {
    return this.weeks.set(key, val);
  }

  hasWeekAmount(uniqueKey) {
    return this.weeks.has(uniqueKey);
  }

  calculateWeekAmount(obj) {
    const { amount } = obj.operation;

    const uniqueKey = this.getUniqueKey(obj);

    if (this.hasWeekAmount(uniqueKey)) {
      const weekAmount = this.getWeekAmount(uniqueKey) + amount;

      this.setWeekAmount(uniqueKey, weekAmount);
    } else {
      this.setWeekAmount(uniqueKey, amount);
    }
  }
};
