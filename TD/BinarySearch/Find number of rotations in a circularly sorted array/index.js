/*
    Find number of rotations in a circularly sorted array
 
    Given a circularly sorted array of integers, find the number of times the array is rotated. Assume there are no duplicates in the array and the rotation is in anti-clockwise direction.


    

    For example,


    Input: arr = [8, 9, 10, 2, 5, 6]
    Output: The array is rotated 3 times
    
    
    Input: arr = [2, 5, 6, 8, 9, 10]
    Output: The array is rotated 0 times

    

    
    If we carefully analyze the problem, we can see that

    Number of rotations = Number of elements before minimum element of the array or index of the minimum element.

    
    A simple solution would be to run a linear search on the array and find the index of the minimum element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is circularly sorted.

    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. We have already reduced the problem to finding out the first element of the sorted sequence. The first element (Pivot) has one special property (lets call it pivot property) – both next and previous element of the pivot element are greater than it. No other element in the array will have this property except the pivot element. Since the array is circularly sorted,

    If pivot is the last element, then the first element will be considered as its next element.
    
    If pivot is the first element, then the last element will be considered as its previous element.
    We know that the mid element always divides the array into two sub-arrays and pivot element can lie only in one of these halves. It is worth noticing that at-least one of these sub-arrays will always be sorted. If mid happens to be the point of rotation (minimum element), then both left and right sub-arrays will be sorted but but in any case one half (sub-array) must be sorted and we will make use of this property to discard left half or the right half at each iteration of the binary search.
*/

var numberOfRotations = function(nums) {
  // search space is nums[left..right]
  let left = 0;
  let right = nums.length - 1;
  // iterate till search space contains at-least one element
  while (left <= right) {
    // if the search space is already sorted, we have
    // found the minimum element (at index left)
    if (nums[left] <= nums[right]) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);
    // find next and previous element of the mid element
    // (in circular manner)
    let next = (mid + 1) % nums.length;
    let prev = (mid - 1) % nums.length;
    // if mid element is less than both its next and previous
    // neighbor, then it is the minimum element of the array
    if (nums[mid] <= nums[prev] && nums[mid] <= nums[next]) {
      return mid;
    }
    // if A[left..mid] is sorted then pivot element cannot be
    // present in it and we can discard A[left..mid] and search
    // in the right half
    else if (nums[mid] >= nums[left]) {
      left = mid + 1;
    }
    // if A[mid..right] is sorted and mid is not the min element,
    // then pivot element cannot be present in A[mid..right] and
    // we can discard A[mid..right] and search in the left half
    else if (nums[mid] <= nums[right]) {
      right = mid - 1;
    }
  }
  return -1;
};

module.exports = numberOfRotations;
