const search = require('./index');
test('numberOfRotations is a function', () => {
  expect(typeof search).toEqual('function');
});

test('search in rotated sorted array works properly', () => {
  expect(search([9, 10, 2, 5, 6, 8], 5)).toEqual(3);
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  expect(search([3, 5, 1], 3)).toEqual(0);
  expect(search([8, 9, 10, 2, 5, 6], 10)).toEqual(2);
});
