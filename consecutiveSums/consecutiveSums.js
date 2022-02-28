// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
  var result = [];
  for (let j = 0; j < arr.length; j++) {
      for (let i = j; i < arr.length; i++) {
    var sum = 0;
    var subRes = [];
    if (sum < k) {
      sum += arr[i];
      subRes.push(arr[i]);
    } else if (sum === k) {
      result.push([...subRes]);
    } else if(sum > k){
      sum = 0;
      subRes = [];
    }
  }
  }
  return result;
}