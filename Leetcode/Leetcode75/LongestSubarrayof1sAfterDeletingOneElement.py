# 1493. Longest Subarray of 1's After Deleting One Element
# https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        k = 1
        ans = 0
        i = 0
        for j in range(len(nums)):
            if nums[j] == 0:
                k -= 1

            while k < 0:
                if nums[i] == 0:
                    k += 1
                i += 1
            ans = max(ans, j - i)

        return ans
