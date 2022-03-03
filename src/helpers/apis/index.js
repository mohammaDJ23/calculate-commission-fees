const { APIS } = require("../types");

module.exports = {
  [APIS.CASH_IN]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-in",
      method: "get"
    };
  },

  [APIS.CASH_OUT_JURIDICAL]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-out-juridical",
      method: "get"
    };
  },

  [APIS.CASH_OUT_NATURAL]() {
    return {
      url: "https://developers.paysera.com/tasks/api/cash-out-natural",
      method: "get"
    };
  }
};
