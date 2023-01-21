# 283. Move Zeroes
# https://leetcode.com/problems/move-zeroes/description/?envType=study-plan&id=algorithm-i
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        [0,1,0,3,12]
         l r
        [1,3,12,0,0]
               l  r  
        [1,3,12,3,12]
             l      r 
        """
        if len(nums) == 1:
            return nums
        left = 0
        right = 0

        while right < len(nums):
            if nums[right] != 0:
                nums[left] = nums[right] 
                left += 1
                right += 1
            else:
                right += 1

        while left < len(nums):
            nums[left] = 0
            left += 1
        

