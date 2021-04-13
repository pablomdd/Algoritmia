/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const steps = [1, 2];
    const cache = {};
    //we're counting succesful paths by taking [1,2] steps at each call;
    const climb = (n) => {
        if (n < 0) return 0;
        if (n === 0) return 1;

        let numberOfWays = 0;
        if (cache[n]) {
            numberOfWays = cache[n];
        } else {
            for (step of steps) {
                numberOfWays += climb(n - step);
            }
        }
        cache[n] = numberOfWays;
        return numberOfWays;
    }

    return climb(n);
};