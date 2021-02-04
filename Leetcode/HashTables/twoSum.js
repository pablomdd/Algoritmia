// 1. Two Sum
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if(map.has(difference)){
            return [map.get(difference), i]
        }
        
        map.set(nums[i], i)
    }
    
    return;
};