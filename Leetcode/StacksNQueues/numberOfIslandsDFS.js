// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let islands = 0

    // traversinf the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            //dfs
            if (grid[row][col] === "1") {
                islands += dfs(grid, row, col);
            }
        }
    }
    return islands;
};

function dfs(grid, row, col) {
    // top border || right border || bottom border || left border
    if (row < 0 || col >= grid[0].length || row >= grid.length || col < 0 || grid[row][col] === "0") {
        return 0;
    }

    grid[row][col] = "0";

    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);

    return 1;
}

// grid = [
//   ["1"t,"1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]]

grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(numIslands(grid));