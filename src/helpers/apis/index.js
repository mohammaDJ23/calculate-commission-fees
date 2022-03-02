const { CASH_IN, CASH_OUT_JURIDICAL, CASH_OUT_NATURAL } = require("../types");

module.exports = {
  [CASH_IN]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-in",
      method: "get"
    };
  },

  [CASH_OUT_JURIDICAL]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-out-juridical",
      method: "get"
    };
  },

  [CASH_OUT_NATURAL]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-out-natural",
      method: "get"
    };
  }
};
