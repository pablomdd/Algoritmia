# 1004. Max Consecutive Ones III
# https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_count = 0
        i = 0
        for j in range(len(nums)):
            if nums[j] == 0:
                k -= 1

            while k < 0:
                if nums[i] == 0:
                    k += 1
                i += 1

            max_count = max(j - i + 1, max_count)

        return max_count


'''
nums = [1,1,1,0,0,0,1,1,1,1,0]
                  i
                            j

k = 0
max_count = (j - i) + 1 = 5

'''