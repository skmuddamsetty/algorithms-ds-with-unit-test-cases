const twoSum = require('./index');

test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function');
});

test('Returns the correct indices of the numbers matching the target', () => {
  const res = twoSum([2, 7, 11, 15], 9);
  expect(res).toEqual([0, 1]);
  const res1 = twoSum([-1, -2, -3, -4, -5], -8);
  expect(res1).toEqual([2, 4]);
});
