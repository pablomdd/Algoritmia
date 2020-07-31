function hourglassSum(arr) {
  // For storing the max sum
  let maxSum = -Infinity;
  // As it's a fixed array, it doesn't mind too much these limits
  let maxX = 4;
  let maxY = 4;

  for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
      // first line of hourglasses
      let currSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      // middle line
      currSum += arr[i + 1][j + 1];
      //   third hourglass line
      currSum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      // update if current > maxSum
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));
