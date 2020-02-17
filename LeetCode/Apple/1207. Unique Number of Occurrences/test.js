const uniqueOccurrences = require('./index');
test('uniqueOccurrences is a function', () => {
  expect(typeof uniqueOccurrences).toEqual('function');
});
test('Unique Number of occurences works properly', () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toEqual(true);
  expect(uniqueOccurrences([1, 2]).toEqual(false));
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]).toEqual(true));
});
