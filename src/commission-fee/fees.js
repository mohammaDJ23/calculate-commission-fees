const Request = require("../service");
const api = require("../helpers/apis");
const { APIS } = require("../helpers/types");

const { CASH_IN, CASH_OUT_JURIDICAL, CASH_OUT_NATURAL } = APIS;

module.exports = class Fees {
  constructor() {
    this.cashIn = {};
    this.cashOutNatural = {};
    this.cashOutJuridical = {};
  }

  static async build() {
    const fees = new Fees();

    await Promise.all([fees.getCashIn(), fees.getCashOutNatural(), fees.getCashOutJuridical()]);

    return fees;
  }

  async getCashIn() {
    this.cashIn = await Request.req(api[CASH_IN]());
  }

  async getCashOutNatural() {
    this.cashOutNatural = await Request.req(api[CASH_OUT_NATURAL]());
  }

  async getCashOutJuridical() {
    this.cashOutJuridical = await Request.req(api[CASH_OUT_JURIDICAL]());
  }
};
