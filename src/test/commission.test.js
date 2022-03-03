require("../helpers/prototypes");

const Fees = require("../commission-fee/fees");
const Commission = require("../commission-fee/commission");
const data = require("../data.test.json");

let fees = null;

beforeAll(async function () {
  fees = await Fees.build();
});

describe("Testing major calculation", function () {
  test("Finding commission fee of users", function () {
    const commission = Commission.build({ data, fees });
    const result = commission.getCommission();

    expect(result).toStrictEqual(["0.06", "0.90", "87.00", "3.00", "0.30", "0.90", "0.90", "0.90", "0.90", "0.00"]);
  });
});

describe("Testing minor methods", function () {
  test("cashIn method", function () {
    const commission = Commission.build({ fees });
    const result = commission.cashIn(data[0]);

    expect(result).toBe("0.06");
  });

  test("legalPerson method", function () {
    const commission = Commission.build({ fees });
    const result = commission.legalPerson(data[1]);

    expect(result).toBe("0.90");
  });

  test("naturalPerson method", function () {
    const commission = Commission.build({ data, fees });

    commission.weeksAmounts();

    const result = commission.naturalPerson(data[7]);

    expect(result).toBe("0.90");
  });

  test("naturalPerson method", function () {
    const commission = Commission.build({ data, fees });

    commission.weeksAmounts();

    const result = commission.naturalPerson(data[9]);

    expect(result).toBe("0.00");
  });
});
