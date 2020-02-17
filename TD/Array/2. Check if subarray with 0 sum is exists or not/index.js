/*
    Check if subarray with 0 sum is exists or not
 
    Given an array of integers, check if array contains a sub-array having 0 sum.

    For example,

    Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
    
    Output: Subarray with 0 sum exists
    
    The sub-arrays with 0 sum are:
    
    { 3, 4, -7 }
    { 4, -7, 3 }
    { -7, 3, 1, 3 }
    { 3, 1, -4 }
    { 3, 1, 3, 1, -4, -2, -2 }
    { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
*/
function subArrayWithZeroSum(nums) {
  let set = new Set();
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum = sum + nums[index];
    if (set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }
  return false;
}

module.exports = { subArrayWithZeroSum };
