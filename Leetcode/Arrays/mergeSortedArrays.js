// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m --;
    n --;
    
    let driver = nums1.length - 1;
    
    while(driver >= 0){
        if(m < 0){
            nums1[driver] = nums2[n];
            n--;
        } else if(n < 0) {
            nums1[driver] = nums1[m];
            m--;
        } else {
            if(nums1[m] > nums2[n]){
                nums1[driver] = nums1[m];
                m--;
            } else {
                nums1[driver] = nums2[n];
                n--;
            }   
        }
        driver--;
    }
    
    return;
};
// [1,2,3,0,0,0] [2,5,6]
//      m     |       n


// Not good idea start from beginning
// [1,5,6,0,0,0]   [2,2,3]
//    p             n
     
// p < n -> p++
// p > n -> swap -> pass      
// p == 0 && n -> put n -> n++

// Startin from the end
// [1,2,2,3,5,6] [0,0,0]
//  m |           n
// m < n -> nums1[p]= num2[n] = 0 -> n--, p--

// m >= n -> nums1[p]= num1[n] = 0 -> m--, p--




