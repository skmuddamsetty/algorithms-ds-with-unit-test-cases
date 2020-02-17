const { singleNumber } = require('./index');
test('Returns the Single Number in the array', () => {
  expect(singleNumber([1, 1, 2])).toEqual(2);
  expect(singleNumber([2, 2, 1])).toEqual(1);
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
});
