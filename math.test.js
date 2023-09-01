const { sum } = require('./math');

test('sum of an array of numbers', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('sum of an empty array should be 0', () => {
  expect(sum([])).toBe(0);
});

test('throws an error for non-array input', () => {
  expect(() => sum(123)).toThrow('Input should be an array of numbers');
});