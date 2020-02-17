/*
    Longest Substring Without Repeating Characters
    Solution
    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. 
                Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;
  let mySet = new Set();
  while (b_pointer < s.length) {
    if (!mySet.has(s[b_pointer])) {
      mySet.add(s[b_pointer]);
      b_pointer++;
      max = Math.max(mySet.size, max);
    } else {
      mySet.delete(s[a_pointer]);
      a_pointer++;
    }
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
