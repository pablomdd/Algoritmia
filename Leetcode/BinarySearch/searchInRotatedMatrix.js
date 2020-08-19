/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    if(nums.length == 1){
        return nums[0] == target ? 0 : -1;
    }
    
    //  left    mid     right
    //  >       > <     >
    //  >               <
    //  <               >
    //  <               <
    
    
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            if(nums[left] > nums[mid] && nums[right] < target){
                right = mid - 1;
            } else{
                left = mid + 1;
            }
        } else{
            if(nums[right] < nums[mid] && nums[left] > target){
                left  = mid + 1;
            }else{
                right =  mid - 1;
            }
            
        }           
    }
    
    return -1;
};