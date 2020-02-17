const lengthOfLongestSubstring = require('./index');

test('lengthOfLongestSubstring function exists', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('Longest Substring Test cases', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});
