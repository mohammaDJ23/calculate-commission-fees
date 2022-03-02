module.exports = class Weeks {
  constructor() {
    this.weeks = new Map();
  }

  getUniqueKey(obj) {
    return `${new Date(obj.date).getWeek()}_${obj.user_id}`;
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

  calculateWeek(obj) {
    const uniqueKey = this.getUniqueKey(obj);
    const amount = obj.operation.amount;

    if (this.hasWeekAmount(uniqueKey)) {
      const weekAmount = this.getWeekAmount(uniqueKey) + amount;

      this.setWeekAmount(uniqueKey, weekAmount);
    } else {
      this.setWeekAmount(uniqueKey, amount);
    }
  }
};
