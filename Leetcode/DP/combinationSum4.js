// https://leetcode.com/problems/combination-sum-iv/
// 377. Combination Sum IV

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    let ans = 0;
    // const dp = {};
    // dp[target] = 0;
    let dp = [];
    const helper = (n) => {
        if (n < 0) return 0;
        if (n === 0) return 1;

        if (n in dp) return dp[n];


        let localCount = 0;
        for (let num of nums) {
            localCount += helper(n - num);
        }

        dp[n] = localCount;
        return localCount;
    };

    for (let num of nums) {
        if (target - num >= 0)
            ans += helper(target - num);
    }

    return ans;
};
// Top -> Bottom aproach - Memoization