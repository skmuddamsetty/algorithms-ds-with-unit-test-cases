/*
    Group Anagrams
    Solution
    Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
    Note:

    All inputs will be in lowercase.
    The order of your output does not matter.

    Complexity Analysis

    Time Complexity: O(NKlogK), where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then, we sort each string in O(KlogK) time.

    Space Complexity: O(NK)O(NK), the total information content stored in ans.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  let resultArr = [];
  for (let str of strs) {
    let sortedStr = str
      .split('')
      .sort()
      .join('');
    if (map[sortedStr] === undefined) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }
  for (let items in map) {
    resultArr.push(map[items]);
  }
  return resultArr;
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

module.exports = groupAnagrams;
