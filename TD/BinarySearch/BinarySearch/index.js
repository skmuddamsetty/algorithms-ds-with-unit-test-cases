/*
    Binary Search Algorithm | Recursive & Iterative Implementation
 
    Given a sorted array of integers and a target value, find out if a target exists in the array or not in O(log(n)) time using Binary Search Algorithm in C and Java. If target exists in the array, print index of it.


    For example,
    


    Input:
    arr[] = [2, 3, 5, 7, 9]
    target = 7
    
    Output: Element found at index 3
    
    
    Input:
    arr[] = [1, 4, 5, 8, 9]
    target = 2
    
    Output: Element not found
    

    
    A simple solution would be to perform Linear search on the given array. It sequentially checks each element of the array for the target value until a match is found or until all the elements have been searched. Worst case time complexity of this approach is O(n) as it makes at most n comparisons, where n is the length of the array. This approach don’t take advantage of the fact that array is sorted.

    

    How can we perform better?
    The idea is to use Binary Search. Binary Search is a divide and conquer algorithm. Like all divide and conquer algorithms, Binary Search first divides a large array into two smaller sub-arrays and then recursively (or iteratively) operate the sub-arrays. But instead of operating on both sub-arrays, it discards one sub-array and continue on the second sub-array. This decision of discarding one sub-array is made in just one comparison.

    
    So Binary Search basically reduces the search space to half at each step. By search space we mean sub-array of given array where the target value is located (if present in the array). Initially, the search space is the entire array and binary search redefine the search space at every step of the algorithm by using the property of the array that it is sorted. It does so by comparing the mid value in the search space to the target value. If the target value matches the middle element, its position in the array is returned else it discards half of the search space based on the comparison result.

    
    Let us track the search space by using two index – start and end. Initially, start = 0 and end = n-1 (as initially whole array is our search space). At each step, we find the mid value in the search space and compares it with target value. There are three cases possible –

    Case 1: If target = A[mid], we return mid.
    
    Case 2: If target < A[mid], we discard all elements in the right search space including the mid element i.e. A[mid..high]. Now our new high would be mid – 1.
    
    Case 3: target > A[mid], we discard all elements in the left search space including the mid element i.e. A[low..mid]. Now our new low would be mid + 1.
    

    We repeat the process until target is found or our search space is exhausted.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search_iterative = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search_recursive = function(
  nums,
  target,
  left = 0,
  right = nums.length - 1
) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  if (nums[mid] > target) {
    return search_recursive(nums, target, left, mid - 1);
  } else {
    return search_recursive(nums, target, mid + 1, right);
  }
};

module.exports = { search_iterative, search_recursive };
