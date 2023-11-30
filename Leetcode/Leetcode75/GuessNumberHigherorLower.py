# 374. Guess Number Higher or Lower
# https://leetcode.com/problems/guess-number-higher-or-lower/description/?envType=study-plan-v2&envId=leetcode-75

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        if n == 1:
            return 1
        left, right = 1, n+1
        while left <= right:
            mid = (right + left) // 2
            clue = guess(mid)
            if clue == -1:
                right = mid
            elif clue == 1:
                left = mid
            else:
                return mid
        return 0
'''
2,2
left = 1
right = 2
mid = (2-1)//2 = 1 + 1//2 = 1

'''