# 167. Two Sum II - Input Array Is Sorted
# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan&id=algorithm-i

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        """
        target = 9
        [2,7,11,15]
         lr

        """
        left = 0
        right = len(numbers) - 1
        while left <= right:
            # codee
            count = numbers[left] + numbers[right]
            if count == target:
                return [left + 1, right + 1]
            elif count < target:
                left += 1
            else:
                right -= 1


        