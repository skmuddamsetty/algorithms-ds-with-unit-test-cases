/*
    Count occurrences of a number in a sorted array with duplicates
 
    Given a sorted array of integers containing duplicates, count occurrences of a number provided. If the element is not found in the array, report that as well.


    
    
    For example,

    Input: A[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
    
    Output: Element 5 occurs 3 times
    
    
    Input: A[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 6
    
    Output: Element 6 occurs 2 times
    

    
    A simple solution would be to run a linear search on the array and count number of occurrence of the given element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is sorted.

    Another solution would be to run a binary search on given sorted array and find the index of any occurrence of given number. Since the array is sorted, all occurrences of given element will be adjacent. So, we run a linear scan to find all instances of given element to the left of found index and also to its right. The worst case time complexity of this solution would remain O(n). The worst case happen when all elements of the array is same as the given element.

    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. The idea is to find the index of first and last occurrence of given number and return the difference between two indices + 1. We have already discuss how to find first and last occurrence of given number in O(log(n)) time in previous post.
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

var countOccurences = function(nums, target) {
  let firstIndex = firstOccurence(nums, target);
  let lastIndex = lastOccurence(nums, target);
  return lastIndex - firstIndex + 1;
};

module.exports = countOccurences;
