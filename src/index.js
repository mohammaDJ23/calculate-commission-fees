require("./helpers/prototypes");

const Fees = require("./commission-fee/fees");
const Commission = require("./commission-fee/commission");

const data = require(process.argv[2]);

(async function () {
  try {
    const fees = Fees.build();

    await Promise.all([fees.getCashIn(), fees.getCashOutNatural(), fees.getCashOutJuridical()]);

    const commission = Commission.build(fees);

    commission.calculate(data);
  } catch (error) {
    console.log(error);
  }
})();
