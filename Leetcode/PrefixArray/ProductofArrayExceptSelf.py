# 238. Product of Array Except Self
# https://leetcode.com/problems/product-of-array-except-self
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        suffix = [1]
        prefix = [1]
        for i in range(1, len(nums)):
            prefix.append(prefix[i - 1] * nums[i - 1])
        
        for i in range(1, len(nums)):
            suffix.append(suffix[i - 1] * nums[-i])
        
        suffix.reverse()
        ans = []
        for i in range(len(nums)):
            ans.append(prefix[i] * suffix[i])
            
        return ans


'''
start multiplying in 1 for pre and suffix
ar     [1, 2, 3,4]
        i
prefix [1, 1, 2,6]
suffix [1,4,12,24]
 suf  rev [24,12, 4, 1]

ans = prefix[i] * suffix[i]
[24*1, 1*12, 2*4, 6*1 ]

'''