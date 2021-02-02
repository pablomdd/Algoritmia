# 977. Squares of a Sorted Array
# https://leetcode.com/problems/squares-of-a-sorted-array/

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        sorted_squares = []
        length = len(nums)
        
        right = 0
        left = 0
        
        while(right < length and nums[right] < 0):
            right += 1
        left = right - 1
        
        while(left >= 0 and right < length):
            left_square = nums[left]**2 
            right_square = nums[right]**2
            
            if(left_square > right_square):
                sorted_squares.append(right_square)
                right += 1
            else: 
                sorted_squares.append(left_square)
                left -= 1
                
        while(left >= 0):
            sorted_squares.append(nums[left]**2)
            left -= 1
            
        while(right < length):
            sorted_squares.append(nums[right]**2)
            right += 1    
        
        return sorted_squares 
        
        

# [-4,-1,0,3,10]
# l           r
# -1            5   
# output: 
# [0, 1, 9, 16,100]