# 35. Search Insert Position
# https://leetcode.com/problems/search-insert-position/?envType=study-plan&id=algorithm-i
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = left + (right - left) // 2

            if (nums[mid] < target):
                    left = mid + 1
            elif (nums[mid] == target):
                return mid
            else:
                right = mid - 1
        if (target  < nums[mid]):
            return mid
        else:
            return mid + 1

'''
target = 7
[1,3,5,6]
       lr
       m   -> middle + 1

target = 0
[1,3,5,6]
 lr
 m
'''