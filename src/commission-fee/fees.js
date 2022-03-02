const Request = require("../service");
const apis = require("../helpers/apis");
const { CASH_IN, CASH_OUT_NATURAL, CASH_OUT_JURIDICAL } = require("../helpers/types");

module.exports = class Fees {
  constructor() {
    this.cashIn = null;
    this.cashOutNatural = null;
    this.cashOutJuridical = null;
  }

  static build() {
    return new Fees();
  }

  async getCashIn() {
    this.cashIn = await Request.req(apis[CASH_IN]());
  }

  async getCashOutNatural() {
    this.cashOutNatural = await Request.req(apis[CASH_OUT_NATURAL]());
  }

  async getCashOutJuridical() {
    this.cashOutJuridical = await Request.req(apis[CASH_OUT_JURIDICAL]());
  }
};
