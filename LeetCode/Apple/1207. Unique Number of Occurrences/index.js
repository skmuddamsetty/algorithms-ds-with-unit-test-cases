/*
    1207. Unique Number of Occurrences
    Easy

    219

    13

    Add to List

    Share
    Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

    

    Example 1:

    Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
    Example 2:

    Input: arr = [1,2]
    Output: false
    Example 3:

    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
    Output: true
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = {};
  let set = new Set();
  for (let num of arr) {
    map[num] = map[num] + 1 || 1;
  }
  for (let key in map) {
    if (set.has(map[key])) {
      return false;
    } else {
      set.add(map[key]);
    }
  }
  return true;
};

module.exports = uniqueOccurrences;
