const Request = require('../utility/service');

describe('Request', () => {
  test('Unsuccessful request', async () => {
    try {
      await Request.req({
        url: 'http://nothing.com',
        method: 'get',
      });
    } catch (error) {
      expect(error.message).toBe('Something went wrong');
    }
  });

  test('Successful request', async () => {
    try {
      const data = await Request.req({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'get',
      });

      expect(data.userId).toBe(1);
    } catch (error) {
      // ...
    }
  });
});
