const { subArrayWithZeroSum } = require('./index');

test('subArrayWithZeroSum is a function', () => {
  expect(typeof subArrayWithZeroSum).toEqual('function');
});

test('subArrayWithZeroSum is present', () => {
  expect(subArrayWithZeroSum([3, 4, -7, 3, 1, 3, 1, -4, -2, -2])).toEqual(true);
  expect(subArrayWithZeroSum([3, 4, 7, 3, 1, -3, -1, -4, -2, -2])).toEqual(
    true
  );
  expect(subArrayWithZeroSum([3, 4, 7, 3, 1, -3, 1, -4, -2, -2])).toEqual(
    false
  );
});
