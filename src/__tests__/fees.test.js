require('../utility/prototypes');

const Fees = require('../app/fees');
const data = require('../__mocks__/fees.test.json').toCamelCase();

describe('Fees', () => {
  test('Getting cash_in api', async () => {
    const fees = new Fees();

    await fees.getCashIn();

    expect(fees.cashIn).toStrictEqual(data.cashIn);
  });

  test('Getting cah_out_natural api', async () => {
    const fees = new Fees();

    await fees.getCashOutNatural();

    expect(fees.cashOutNatural).toStrictEqual(data.cashOutNatural);
  });

  test('Getting cash_out_juridical api', async () => {
    const fees = new Fees();

    await fees.getCashOutJuridical();

    expect(fees.cashOutJuridical).toStrictEqual(data.cashOutJuridical);
  });
});
