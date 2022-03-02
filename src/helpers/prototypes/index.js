Number.prototype.max = function (...number) {
  return Math.max(this, ...number);
};

Number.prototype.min = function (...number) {
  return Math.min(this, ...number);
};

Date.prototype.getWeek = function () {
  const target = new Date(this.valueOf());

  const dayNr = (this.getDay() + 6) % 7;

  target.setDate(target.getDate() - dayNr + 3);

  const firstThursday = target.valueOf();

  target.setMonth(0, 1);

  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000);
};
