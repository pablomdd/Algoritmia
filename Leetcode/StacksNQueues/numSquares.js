// https://leetcode.com/problems/perfect-squares/
// 279. Perfect Squares

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const visited = new Set();
    // let counter = 0;
    // let queue = [0];

    let queue = [[0, 0]];
    //     BFS
    while (queue.length) {
        const [current, counter] = queue.shift();

        for (let i = 1; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
            let sum = current + i * i;

            if (sum === n) return counter + 1;

            if (!visited.has(sum)) {
                visited.add(sum);

                queue.push([sum, counter + 1]);
            }
        }
    }
    return -1;
};