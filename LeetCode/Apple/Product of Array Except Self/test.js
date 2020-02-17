const { productExceptSelf_Sol_1, productExceptSelf_Sol_2 } = require('./index');

test('productExceptSelf_Sol_1 function exists', () => {
  expect(typeof productExceptSelf_Sol_1).toEqual('function');
});
test('productExceptSelf_Sol_2 function exists', () => {
  expect(typeof productExceptSelf_Sol_2).toEqual('function');
});

test('productExceptSelf_Sol_1 returns the product correctly', () => {
  expect(productExceptSelf_Sol_1([4, 5, 1, 8, 2])).toEqual([
    80,
    64,
    320,
    40,
    160
  ]);
  expect(productExceptSelf_Sol_1([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('productExceptSelf_Sol_2 returns the product correctly', () => {
  expect(productExceptSelf_Sol_2([4, 5, 1, 8, 2])).toEqual([
    80,
    64,
    320,
    40,
    160
  ]);
  expect(productExceptSelf_Sol_2([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});
