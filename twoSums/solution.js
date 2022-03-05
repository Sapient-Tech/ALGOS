// 🐸
function twoSums(arr, target) {
  let idx1 = 0;
  let idx2 = 1;
  var output = [];
  while (idx1 !== arr.length) {
    if (arr[idx1] + arr[idx2] === target) {
      output.push(idx1);
      output.push(idx2);
      return output;
    } else if (idx2 === arr.length) {
      idx1++;
      idx2 = idx1 + 1;
    } else {
      idx2++;
    }
  }
  return output;
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
