# 1207. Unique Number of Occurrences
# https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        ocurrences = {}

        for num in arr:
            ocurrences[num] = ocurrences.get(num, 0) + 1 

        uniqueness_set = set()
        for num in ocurrences:
            if not ocurrences[num] in uniqueness_set:
                uniqueness_set.add(ocurrences[num])
            else:
                return False

        return True

        
        