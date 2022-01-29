// bubbleSort()
/* 
  todo  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  todo  Stable sort
  todo  Time Complexity
  todo      - Best: O(n) linear when array is already sorted.
  todo      - Average: O(n^2) quadratic.
  todo      - Worst: O(n^2) quadratic when the array is reverse sorted.
  todo  Space: O(1) constant.
  todo  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  todo  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
  todo  -> Assume there are no duplicates
*/
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
  for (let j in nums) {
    for (let i in nums) {
      if (nums[j] > nums[j + 1]) {
        nums[j], (nums[j + 1] = nums[j + 1]), nums[j];
      } else {
        nums[j] = nums[j];
      }
    }
    return nums;
  }
}

console.log(bubbleSort(nums1));
