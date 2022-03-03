const axios = require('axios');

module.exports = class Request {
  static async req(arg) {
    const response = await axios(arg);

    if (response.status >= 400) {
      throw new Error('Something went wrong');
    }

    return response.data;
  }
};
