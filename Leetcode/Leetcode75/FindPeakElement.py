# 162. Find Peak Element
# https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if mid > 0 and nums[mid] < nums[mid - 1]:
                right = mid - 1
            elif mid < len(nums) - 1 and nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                return mid

'''
[1,2,3,1]
l  m    r


[1,2,1,3,5,6,7]
             lr
             m 
'''