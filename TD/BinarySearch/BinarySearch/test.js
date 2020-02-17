const { search_iterative, search_recursive } = require('./index');
test('search_iterative is a function', () => {
  expect(typeof search_iterative).toEqual('function');
});
test('search_recursive is a function', () => {
  expect(typeof search_recursive).toEqual('function');
});

test('Binary Search Iterately Works Properly', () => {
  expect(search_iterative([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 7)).toEqual(3);
  expect(search_iterative([2, 3, 5, 7, 9], 7)).toEqual(3);
  expect(search_iterative([1, 4, 5, 8, 9], 2)).toEqual(-1);
});

test('Binary Search Recursive Works Properly', () => {
  expect(search_recursive([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 7)).toEqual(3);
  expect(search_recursive([2, 3, 5, 7, 9], 7)).toEqual(3);
  expect(search_recursive([1, 4, 5, 8, 9], 2)).toEqual(-1);
});
