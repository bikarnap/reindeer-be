const average = require('../utils/for_testing').average;

describe('Average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1);
  });

  test('of multiple values is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6]))
      .toBe(3.5);
  });

  test('of an empty array is zero', () => {
    expect(average([])).toBe(0);
  });
});