const { isPalindrome } = require('./index');

test('isPalindrome function exists', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('isPalidrome working correctly', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  expect(isPalindrome('race a car')).toEqual(false);
});
