// Leetcode #78
/*
 * @param {number[]} nums
 * @return {number[][]}
 */
//  CASCADING
var subsets = function(nums) {
    const output = [[]];
    
    for(let num of nums) {
        const newSubsets = [];
        for(let curr of output) {
            newSubsets.push([...curr, num]);
        }
        /*
        for(let curr of newSubsets) {
            output.push(curr);
        }*/
        output.push(...newSubsets);
    }
    return output;
};

// Testing
const nums = [1 , 2, 3];
console.log(subsets(nums)); 