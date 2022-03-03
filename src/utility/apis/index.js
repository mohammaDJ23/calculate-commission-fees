const { APIS } = require('../types');

module.exports = {
  [APIS.CASH_IN]() {
    return {
      url: `${process.env.API_URL}/tasks/api/cash-in`,
      method: 'get',
    };
  },

  [APIS.CASH_OUT_JURIDICAL]() {
    return {
      url: `${process.env.API_URL}/tasks/api/cash-out-juridical`,
      method: 'get',
    };
  },

  [APIS.CASH_OUT_NATURAL]() {
    return {
      url: `${process.env.API_URL}/tasks/api/cash-out-natural`,
      method: 'get',
    };
  },
};
