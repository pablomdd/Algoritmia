# 523. Continuous Subarray Sum
# https://leetcode.com/problems/continuous-subarray-sum/
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        #         will modify input array
        if(len(nums) <= 1):
            return False
#         The idea is to keep an hashmap of the prefixes or presum of nums mod k
# if then, our presum is 0 mod k or if presum is already in the hashmap then we've found our result
# this is because: (sum1 - sum2)%k = 0
#                => sum1 % k = sum2 % k
# where sum(i,j) = sum_j - sum_i with i < j
        prefixes = {0: -1}
        count = 0
        for i in range(len(nums)):
            count += nums[i]

            if (k != 0):
                count %= k

            if count in prefixes:
                if i - prefixes[count] >= 2:
                    return True
            else:
                prefixes[count] = i
        return False
