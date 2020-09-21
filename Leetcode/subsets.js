// Leetcode #78
/*
 * @param {number[]} nums
 * @return {number[][]}
 */
//  CASCADING
// var subsets = function(nums) {
//     const output = [[]];
    
//     for(let num of nums) {
//         const newSubsets = [];
//         for(let curr of output) {
//             newSubsets.push([...curr, num]);
//         }
        
//         // for(let curr of newSubsets) {
//         //     output.push(curr);
//         // }
//         output.push(...newSubsets);
//     }
//     return output;
// };

// BACKTRACKING 
var subsets = function(nums) {
    let k;
    const output = [];
    
    const backtrack = (first = 0, curr = []) => {
        // if subset is complete
        if(curr.length === k){
            output.push([...curr])
        }
        
        for(let i = first; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(i + 1, curr);
            // backtrack
            curr.pop();
            
        }
    }
    

    for(k = 0; k < nums.length + 1; k++){
        backtrack();
    }
    return output;
};

// Testing
const nums = [1 , 2, 3];
console.log(subsets(nums)); 