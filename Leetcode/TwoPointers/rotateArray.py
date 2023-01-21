# 189. Rotate Array
# https://leetcode.com/problems/rotate-array/description/?envType=study-plan&id=algorithm-i
class Solution:
    def reverse(self, nums: List[int], left, right) -> None:
        while left <= right:
            nums[left], nums[right] = nums[right], nums[left]
            left +=1
            right -= 1
    
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.

        7-3 = 4 steps from the beggining
        i = num.len - k - 1
        j = nums.len - k 
        [1,2,3,4,5,6,7]
               i j
         4 3 2 1 7 6 5
         return reverse()
        """
        k = k % len(nums)
        i = len(nums) - k - 1
        j = len(nums) - k

        self.reverse(nums, 0, i)
        self.reverse(nums, j, len(nums) - 1)
        self.reverse(nums, 0, len(nums) - 1)
        print(nums)
        