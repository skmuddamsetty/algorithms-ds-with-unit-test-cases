/*
    Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:

    Input:  [1,2,3,4]
    Output: [24,12,8,6]
    Note: Please solve it without division and in O(n).

    Follow up:
    Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_Sol_1 = function(nums) {
  let leftArray = [1];
  let rightArray = [];
  let outArray = [];
  rightArray[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftArray[i] = leftArray[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArray[i] = rightArray[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    outArray[i] = leftArray[i] * rightArray[i];
  }
  return outArray;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_Sol_2 = function(nums) {
  let outArray = [1];
  for (let i = 1; i < nums.length; i++) {
    outArray[i] = outArray[i - 1] * nums[i - 1];
  }
  let multiplier = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    outArray[i] = outArray[i] * multiplier;
    multiplier = multiplier * nums[i];
  }
  return outArray;
};

module.exports = { productExceptSelf_Sol_1, productExceptSelf_Sol_2 };
