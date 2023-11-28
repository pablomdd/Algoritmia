# 2390. Removing Stars From a String
# https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def removeStars(self, s: str) -> str:
        stack = []
        for char in s:
            if not char == "*":
                stack.append(char)
            else:
                stack.pop()

        return ''.join(stack)
"""
s = "leet**cod*e"
               |
stack = lecoe 
"""