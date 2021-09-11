# 75. Sort Colors
# https://leetcode.com/problems/sort-colors/
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        dict = {
            0: 0,
            1: 0,
            2: 0
        }

        for num in nums:
            dict[num] += 1
        i = 0
        for color in dict:
            while dict[color] > 0:
                nums[i] = color
                i += 1
                dict[color] -= 1

# Time: O(2n) = O(n)
# Space: O(1)
