// # 485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;  
    
    if(nums.length === 0) return max;
    
    let current = 0;
    for(let num of nums){
        if(num === 1){
            current++;
        } else {
            current = 0;
        } 
        if(current > max){
            max = current;
        }
    }
    
    
    return max;
};