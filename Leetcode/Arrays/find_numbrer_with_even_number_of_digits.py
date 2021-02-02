# https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
# 1295. Find Numbers with Even Number of Digits
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        if(len(nums) == 0):
            return 0
        
        evens = 0
        for num in nums:
            if(self.isDigitCountEven(num)):
                evens += 1
                
        return evens
            
            
    def numberOfDigits(self, num: int) -> int:
        digits = 0
        while(num > 0):
            num //= 10
            digits += 1
        return digits
    
    def isDigitCountEven(self, num: int) -> bool:
            if self.numberOfDigits(num) % 2 == 0:
                return True
            else:
                return False