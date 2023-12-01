# 2300. 
# https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        def findFactorIndex(potions, factor):
            left, right = 0, len(potions) - 1
            idx = len(potions)
            while left <= right:
                mid = left + (right - left) // 2 
                if potions[mid] >= factor:
                    right = mid - 1
                    idx = mid
                else:
                    left = mid + 1
            # print('potions[mid]',potions[mid], 'mid', mid, 'factor', factor)
            return idx

        # O(p log p)
        potions.sort()
        # print('potions', potions)
        pairs = []
        for spell in spells:
            factor = math.ceil(success / spell)
            index = findFactorIndex(potions, factor)
            pairs.append(len(potions) - index)

        return pairs


'''
spells = [3,1,2], potions = [5,8,8], success = 16

factor = success / spell[i] = 16/3 = 5

sort potion ====> jlogj
iterate spells ====> O(n)
    find factor
    search for factor or closest num in ordered potions O(logj)
    then ans = len(potions) - index 



search

factor = 3
[2,5,5,8,8]
  lr
 m
'''