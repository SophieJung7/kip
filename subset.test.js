const isSubset = require('./subset');

test('2nd array is subset of 1st array', () => {
  const result = isSubset();
  expect(result).toBe('hello');
});
