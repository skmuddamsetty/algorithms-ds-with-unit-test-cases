const { firstUniqChar } = require('./index');

test('firstUniqChar function exists', () => {
  expect(typeof firstUniqChar).toEqual('function');
});

test('first unique char working properly', () => {
  expect(firstUniqChar('leetcode')).toEqual(0);
  expect(firstUniqChar('loveleetcode')).toEqual(2);
});
