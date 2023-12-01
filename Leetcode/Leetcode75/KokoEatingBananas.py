# 875. Koko Eating Bananas
# https://leetcode.com/problems/koko-eating-bananas/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def eat_rate(piles, rate):
            hours = 0
            for pile in piles:
                hours += math.ceil(pile / rate)
            return hours

        max_bananas = max(piles)
        left, right = 1, max_bananas
        k = max_bananas
        while left <= right:
            mid = (left + right) // 2
            hours_taken = eat_rate(piles, mid)
            if hours_taken <= h:
                right = mid - 1
                k = min(mid, k)
            else:
                left = mid + 1

        return k
'''
Input: 
h = 8
piles = [3,6,7,11],
               
ceil (27 / 8) = 4
12345678

Input: piles = [30,11,23,4,20], h = 5


Input: piles = [30,11,23,4,20], h = 6
[4, 11, 20, 23, 30]
ceil (88 / 6 = 14.66) = 15

'''