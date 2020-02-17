const numberOfRotations = require('./index');
test('numberOfRotations is a function', () => {
  expect(typeof numberOfRotations).toEqual('function');
});

test('numberOfRotations works properly', () => {
  expect(numberOfRotations([8, 9, 10, 2, 5, 6])).toEqual(3);
  expect(numberOfRotations([2, 5, 6, 8, 9, 10])).toEqual(0);
  expect(numberOfRotations([15, 18, 2, 3, 6, 12])).toEqual(2);
  expect(numberOfRotations([7, 9, 11, 12, 5])).toEqual(4);
  expect(numberOfRotations([7, 9, 11, 12, 15])).toEqual(0);
});
