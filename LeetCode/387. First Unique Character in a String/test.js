const { firstUniqChar } = require('./index');
test("Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.", () => {
  expect(firstUniqChar('leetcode')).toEqual(0);
  expect(firstUniqChar('loveleetcode')).toEqual(2);
  expect(firstUniqChar('')).toEqual(-1);
});
