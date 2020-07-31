// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
function luckBalance(k, contests) {
  //keep track of the k importan competetions to loose
  // loop trough the array
  // important contest ?

  //balance = contests luck - 2 * luckTracker

  // TODO: choose a better DataStruture
  let luckTracker = [];
  let luckBalance = 0;
  let importantContests = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      luckBalance += contests[i][0];
    } else {
      importantContests++;
      luckTracker.push(contests[i][0]);
      luckBalance += contests[i][0];
    }
  }

  if (importantContests > k) {
    luckTracker.sort((a, b) => a - b);
    let n = importantContests - k
    for (let j = 0; j < n; j++) {
      luckBalance -= 2 * luckTracker[j];
    }
  }
  return luckBalance;
}

n = 6;
k = 3;
const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];

console.log(luckBalance(k, contests));
