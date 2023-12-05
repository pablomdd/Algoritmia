# 605. Can Place Flowers
# https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        zeroes = 1
        for num in flowerbed:
            if num == 0:
                zeroes += 1
                if zeroes == 3:
                    n -= 1
                    zeroes = 1
            if num == 1:
                zeroes = 0
        n -= zeroes // 2
        return n <= 0
    
'''
flowerbed = [0,0,1,0,0,0,0,1,0,0,0,0,0,0], n = 3
zeros =  2 // 3
n = 1


'''