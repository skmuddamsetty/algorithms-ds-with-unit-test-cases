/*
    Find all Pairs with given Sum in the Array
 
    Given an unsorted array of integers, find all pairs with given sum in it.

    For example,

    Input:
    
    arr = [8, 7, 2, 5, 3, 1]
    sum = 10
    
    Output:
    
    Pair found at index 0 and 2 (8 + 2)
    and
    Pair found at index 1 and 4 (7 + 3)
*/

/*
  The time complexity of above solution is O(n2) and auxiliary space used by the program is O(1).
*/
function findPair_Naive(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`(${i},${j})`);
      }
    }
  }
}

/*
  The time complexity of below solution is O(nlogn) and auxiliary space used by the program is O(1).
*/
function findPair_Sorting(nums, target) {
  let sortedArr = nums.sort();
  let start = 0;
  let end = sortedArr.length - 1;
  while (start < end) {
    if (sortedArr[start] + sortedArr[end] === target) {
      console.log(`(${start},${end})`);
      start++;
      end--;
    } else if (sortedArr[start] + sortedArr[end] > target) {
      end--;
    } else {
      start++;
    }
  }
}

/*
  The time complexity of below solution is O(n) and auxiliary space used by the program is O(n).
*/
function findPair_Hashing(nums, target) {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    let num = nums[index];
    if (map[num] !== undefined) {
      console.log(`(${map[num]},${index})`);
    } else {
      let diff = target - nums[index];
      map[diff] = index;
    }
  }
}

module.exports = { findPair_Naive, findPair_Hashing, findPair_Sorting };
