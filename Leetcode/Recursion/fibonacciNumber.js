/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const map = new Map();
    const helper = (n) => {
        if (map.get(n)) {
            return map.get(n)
        }
        if (n === 1 || n === 0) return n;
        const result = helper(n - 1) + helper(n - 2);
        map.set(n, result);
        return result;
    }
    return helper(n);
};