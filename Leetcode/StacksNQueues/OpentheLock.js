// https://leetcode.com/problems/open-the-lock
// 752. Open the Lock
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const getNeighbours = (node) => {
    const neighbourNodes = [];
    for (let i = 0; i < node.length; i++) {
        neighbourNodes.push(
            node.slice(0, i) + ((+node[i] + 1) % 10) + node.slice(i + 1)
        );
        neighbourNodes.push(
            node.slice(0, i) + ((+node[i] + 9) % 10) + node.slice(i + 1)
        );
    }
    return neighbourNodes;
}

var openLock = function (deadends, target) {
    const locked = new Set(deadends);
    const visited = new Set("0000");

    let turns = 0;
    let queue = ["0000"];

    // BFS
    while (queue.length) {
        const nextQueue = [];

        for (let node of queue) {
            if (node === target) return turns;

            if (locked.has(node)) continue;
            // Enqueue and build neighbours
            for (let neighbour of getNeighbours(node)) {
                // if seen
                if (visited.has(neighbour)) continue;
                // with this, we "traverse" to that node
                visited.add(neighbour);
                //enqueue to local queue
                nextQueue.push(neighbour);
            }

        }
        turns++;
        queue = nextQueue;
    }
    return -1;
};