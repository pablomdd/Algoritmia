# 392. Is Subsequence
# https://leetcode.com/problems/is-subsequence/
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_pointer = 0
        for letter in t:
            if s_pointer >= len(s): break
            if letter == s[s_pointer]:
                s_pointer += 1
        if s_pointer < len(s):
            return False
        return True

"""
s = "a e c", 
       sp
t = "aahbgdc"
     r
"""
        