require('../utility/prototypes');

describe('Prototypes', () => {
  test('Calculate Minimum number', () => {
    expect((12).min(11)).toBe(11);
  });

  test('Calculate Maximum number', () => {
    expect((20).max(5, 21)).toBe(21);
  });

  test('Calculate week', () => {
    expect(new Date('2010-9-1').getWeek(5)).toBe(35);
  });

  test('Calculate a number with two rounded deciaml', () => {
    expect((0.023).ceil(2)).toBe('0.03');
    expect((0.23).ceil(2)).toBe('0.23');
  });

  test('Converting snake_case to camelCase in obj', () => {
    const obj = { user_id: 1 };

    expect(obj.toCamelCase()).toStrictEqual({ userId: 1 });
  });

  test('Converting snake_case to camelCase in array', () => {
    const arrOfObj = [{ user_id: 1 }];

    expect(arrOfObj.toCamelCase()).toStrictEqual([{ userId: 1 }]);
  });
});
