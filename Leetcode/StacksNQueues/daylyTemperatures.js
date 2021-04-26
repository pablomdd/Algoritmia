// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1363/
// 739. Daily Temperatures
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const stack = [];

    // Time O(n)
    // Space O(s);
    for (let i = T.length - 1; i >= 0; i--) {
        let curr = T[i];

        while (stack.length && stack[stack.length - 1][0] <= curr) {
            stack.pop()
        }

        if (stack.length === 0)
            T[i] = 0;
        else
            T[i] = stack[stack.length - 1][1] - i;

        stack.push([curr, i]);
    }
    return T;
};