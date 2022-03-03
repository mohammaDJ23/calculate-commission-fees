require('../utility/prototypes');

const Week = require('../app/weeks');
const data = require('../__mocks__/weeks.test.json').toCamelCase();

describe('Week', () => {
  test('Getting unique key', () => {
    const week = new Week();

    const uniqueKey = week.getUniqueKey(data[0]);

    expect(uniqueKey).toBe('1_1_natural_cash_out');
  });

  test('Calculating week amount of user for one week', () => {
    const week = new Week();

    Object.keys(data).forEach((obj, index) => week.calculateWeekAmount(data[index]));

    const expectResult = {
      '1_1_natural_cash_out': 31100,
      '11_3_natural_cash_out': 350,
    };

    week.weeks.forEach((value, key) => expect(value).toBe(expectResult[key]));
  });
});
