/*
    Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

    Example 1:

    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Example 2:

    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
    

    Note:

    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    A is sorted in non-decreasing order.
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let negative_pointer = 0;
  let positive_pointer = 0;
  let sortedSquares = [];
  // find the positive and negative pointers start
  while (positive_pointer < A.length && A[positive_pointer] < 0) {
    positive_pointer++;
  }
  negative_pointer = positive_pointer - 1;
  // find the positive and negative pointers end
  while (negative_pointer >= 0 && positive_pointer < A.length) {
    const negative_pointer_square = A[negative_pointer] * A[negative_pointer];
    const positive_pointer_square = A[positive_pointer] * A[positive_pointer];
    if (negative_pointer_square < positive_pointer_square) {
      sortedSquares.push(negative_pointer_square);
      negative_pointer--;
    } else {
      sortedSquares.push(positive_pointer_square);
      positive_pointer++;
    }
  }
  // process remaining elements in the negative pointer
  while (negative_pointer >= 0) {
    sortedSquares.push(A[negative_pointer] * A[negative_pointer]);
    negative_pointer--;
  }
  // process remaining elements in the positive pointer
  while (positive_pointer < A.length) {
    sortedSquares.push(A[positive_pointer] * A[positive_pointer]);
    positive_pointer++;
  }
  return sortedSquares;
};

module.exports = sortedSquares;
