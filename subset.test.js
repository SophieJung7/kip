const isSubset = require('./subset');

test('2nd array is subset of 1st array returns true', () => {
  const result = isSubset(['a', 'b', 'c'], ['a']);
  expect(result).toBe(true);
});

test('2nd array is not subset of 1st array returns false', () => {
  const result = isSubset(['a', 'b', 'c'], ['d']);
  expect(result).toBe(false);
});