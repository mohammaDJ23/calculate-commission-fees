Number.prototype.max = function max(...number) {
  return Math.max(this, ...number);
};

Number.prototype.min = function min(...number) {
  return Math.min(this, ...number);
};

Number.prototype.ceil = function ceil(decimalCount) {
  return (Math.ceil(this * 100) / 100).toFixed(decimalCount);
};

Date.prototype.getWeek = function getWeek() {
  const target = new Date(this.valueOf());

  const dayNr = (this.getDay() + 6) % 7;

  target.setDate(target.getDate() - dayNr + 3);

  const firstThursday = target.valueOf();

  target.setMonth(0, 1);

  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000);
};

Object.prototype.toCamelCase = function toCamelCase() {
  const replaced = {};

  Object.keys(this).forEach(key => {
    const camelCase = key.replace(/([-_][a-z])/gi, $1 => $1.toUpperCase().replace('_', ''));

    replaced[camelCase] = this[key];
  });

  return replaced;
};

Array.prototype.toCamelCase = function toCamelCase() {
  return this.map(row => row.toCamelCase());
};
