/*
    Search an element in a circular sorted array
 
    Given a circular sorted array of integers, search an element in it. Assume there are no duplicates in the array and the rotation is in anti-clockwise direction.

    

    For example,

    Input:
    arr = [8, 9, 10, 2, 5, 6]
    target = 10
    
    Output: Element found at index 2
    
    
    Input:
    arr = [9, 10, 2, 5, 6, 8]
    target = 5
    
    Output: Element found at index 3

    A simple solution would be to run a linear search on the array and find the index of the given element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is circularly sorted.

    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. We know that the mid element always divides the array into two sub-arrays and target element can lie only in one of these sub-arrays. It is worth noticing that at-least one of these sub-arrays will always be sorted. If mid happens to be the point of rotation (minimum element), then both left and right sub-arrays will be sorted but but in any case one half (sub-array) must be sorted. We will make use of this property to discard left half or the right half at each iteration of the binary search.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  // iterate till search space contains at-least one element
  while (left <= right) {
    // find the mid value in the search space and
    // compares it with key value
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    // if right half (A[mid..right]) is sorted and mid is not
    // the key element
    if (nums[mid] <= nums[right]) {
      // compare key with A[mid] and A[right] to know
      // if it lies in A[mid..right] or not
      if (target > nums[mid] && target <= nums[right]) {
        // go searching in right sorted half
        left = mid + 1;
      } else {
        // go searching left
        right = mid - 1;
      }
    }
    // if left half (A[left..mid]) is sorted and mid is not
    // the key element
    else {
      // compare key with A[left] and A[mid] to know
      // if it lies in A[left..mid] or not
      if (target < nums[mid] && target >= nums[left]) {
        // go searching in left sorted half
        right = mid - 1;
      } else {
        // go searching right
        left = mid + 1;
      }
    }
  }
  return -1;
};

module.exports = search;
