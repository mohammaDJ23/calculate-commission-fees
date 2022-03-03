require('../utility/prototypes');

const Fees = require('../app/fees');
const Commission = require('../app/commission');
const data = require('../__mocks__/commission.test.json').toCamelCase();

describe('Commission', () => {
  let fees = null;

  beforeAll(async () => {
    fees = await Fees.build();
  });

  test('Calculate commission fee of cash in', () => {
    const commission = Commission.build({ fees });

    expect(commission.cashIn(data[0])).toBe('0.06');
  });

  test('Calculate commission fee of legal person', () => {
    const commission = Commission.build({ fees });

    expect(commission.legalPerson(data[1])).toBe('0.90');
  });

  test('Calculate commission fee of natural person with week amount and amount of greater than 1000', () => {
    const commission = Commission.build({ data, fees });

    commission.weeksAmounts();

    expect(commission.naturalPerson(data[2])).toBe('117.00');
  });

  test('Calculate commission fee of natural person with week amount of greater than 1000 and amount of less than 1000', () => {
    const commission = Commission.build({ data, fees });

    commission.weeksAmounts();

    expect(commission.naturalPerson(data[4])).toBe('0.30');
  });

  test('Calculate commission fee of natural person with week amount of less than 1000', () => {
    const commission = Commission.build({ data, fees });

    commission.weeksAmounts();

    expect(commission.naturalPerson(data[9])).toBe('0.00');
  });

  test('Calculate commission fee of all users', () => {
    const commission = Commission.build({ data, fees });

    expect(commission.getCommissionFees()).toStrictEqual(['0.06', '0.90', '117.00', '3.00', '0.30', '0.90', '0.90', '0.90', '0.90', '0.00']);
  });
});
