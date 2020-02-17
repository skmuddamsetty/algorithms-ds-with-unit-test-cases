/*
    Find smallest missing element from a sorted array
 
    Given a sorted array of distinct non-negative integers, find smallest missing element in it.


    

    For example,


    Input: A[] = [0, 1, 2, 6, 9, 11, 15]
    Output: The smallest missing element is 3
    
    
    Input: A[] = [1, 2, 3, 4, 6, 9, 11, 15]
    Output: The smallest missing element is 0
    
    
    Input: A[] = [0, 1, 2, 3, 4, 5, 6]
    Output: The smallest missing element is 7

    

    
    A simple analysis of the problem shows us that the smallest missing number would be the index of the element which is not equal to its element. For instance,

    A[] = [0, 1, 2, 6, 9, 11, 15]

    Here the smallest missing element is 3 as 6 is present at index 3 (instead of element 3). If all elements in the array are at their right position (say A[] = [0, 1, 2, 3, 4, 5] ), then the smallest missing number is equal to size of the array i.e. 6 in this case.

    
    A simple solution would be to run a linear search on the array and return the first index which doesn’t match with its value. If no mismatch happens then return the size of the array. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is sorted.

    
    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. The idea is to compare the mid index with the mid element. If both are same then the mismatch lies in the right sub-array else mismatch lies in the left sub-array. So we discard one half accordingly and recur for the other.
*/
