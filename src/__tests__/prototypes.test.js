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
});
