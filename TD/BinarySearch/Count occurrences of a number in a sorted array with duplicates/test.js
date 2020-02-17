const countOccurences = require('./index');
test('countOccurences is a function', () => {
  expect(typeof countOccurences).toEqual('function');
});
test('Number of occurences works properly', () => {
  expect(countOccurences([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 5)).toEqual(3);
  expect(countOccurences([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 6)).toEqual(2);
});
