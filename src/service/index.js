const axios = require("axios");

module.exports = class Request {
  static async req(arg) {
    const { data } = await axios(arg);

    return data;
  }
};
