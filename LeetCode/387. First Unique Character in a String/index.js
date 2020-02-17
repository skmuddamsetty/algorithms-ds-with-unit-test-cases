/*
387. First Unique Character in a String
Easy

1437

98

Add to List

Share
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charMap = {};
  for (let char of s) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let index = 0;
  for (let char of s) {
    if (charMap[char] === 1) {
      return index;
    }
    index++;
  }
  return -1;
};

module.exports = { firstUniqChar };
