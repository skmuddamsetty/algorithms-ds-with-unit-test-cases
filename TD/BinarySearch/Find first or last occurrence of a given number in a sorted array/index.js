/*
    Find first or last occurrence of a given number in a sorted array
 
    Given a sorted array of integers, find index of first or last occurrence of a given number. If the element is not found in the array, report that as well.    

    For example,


    Input:
    arr = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
    
    Output:
    First occurrence of element 5 is found at index 1
    Last occurrence of element 5 is found at index 3
    
    
    Input:
    arr = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 4
    
    Output:
    Element not found in the array   

    
    A simple solution would be to run a linear search on the array and return first or last occurrence of the given element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is sorted. We can easily solve this problem in O(log(n)) time. The idea is to modify the binary search algorithm to solve this problem.
    

    Finding first occurrence of the element –
    In normal binary search, we return as soon as we find any occurrence of the given target element in it. In order to find the first occurrence of the element, the idea is to modify the normal binary search in such a way that we do not stop the search as soon we find any occurrence of the target element. Instead we update the result to mid and go on searching towards left (towards lower indices) i.e. modify our search space by adjusting high to mid – 1 on finding the target at mid index.

    Finding last occurrence of the element –

    In order to find the last occurrence of the element, the idea is to modify the normal binary search in such a way that we do not stop the search as soon we find any occurrence of the target element. Instead we update the result to mid and go on searching towards right (towards higher indices) i.e. modify our search space by adjusting low to mid + 1 on finding the target at mid index.
*/

var firstOccurence = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let result = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};

var lastOccurence = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let result = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
module.exports = { firstOccurence, lastOccurence };
