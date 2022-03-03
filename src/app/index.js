const Fees = require('./fees');
const Commission = require('./commission');

const data = require(process.argv[2]).toCamelCase();

module.exports = async function run() {
  try {
    const fees = await Fees.build();
    const commission = Commission.build({ data, fees });
    const commissionFees = commission.getCommissionFees();

    commissionFees.forEach(fee => console.log(fee));
  } catch (error) {
    console.log(error.message);
  }
};
