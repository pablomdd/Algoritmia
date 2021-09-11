// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let colorCount: { [key: number]: number } = {};

    for (let num of nums) {
        colorCount[num] = (parseInt(colorCount[num]) || 0) + 1;
    }

    let i: number = 0;
    console.log(colorCount)
    for (let color in colorCount) {
        while (colorCount[color] > 0) {
            nums[i] = color;
            i++;
            colorCount[color]--;
        }
    }
};