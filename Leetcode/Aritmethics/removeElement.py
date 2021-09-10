# 27. Remove Element
# https://leetcode.com/problems/remove-element/

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if(len(nums) == 1):
            if(nums[0] == val):
                return 0
            else:
                return 1

        left, right = 0, len(nums) - 1
        k = 0
        while(left <= right):
            if nums[right] == val and right >= 0:
                k += 1
                right -= 1
                continue
            if(nums[left] == val):
                nums[left], nums[right] = nums[right], nums[left]
                continue
            left += 1
        return len(nums) - k

        # nums = [2,2,3,3], val = 3
        #           ||
        # nums = [2,2,_,_]

#         [0,1,4,0,3,2,2,2]   k=3
#                 rl
        # [1]
        # lr

        # [3,2,2] k = 1
        #   lr

#         [2,2,2,2,2] k = 5, r = -1
        # lr
