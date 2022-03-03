const Fees = require("./fees");
const Commission = require("./commission");

const data = require(process.argv[2]);

module.exports = function () {
  Fees.build()
    .then(fees => Commission.build({ data, fees }).getCommission())
    .then(results => results.forEach(result => console.log(result)))
    .catch(err => console.log(err));
};
