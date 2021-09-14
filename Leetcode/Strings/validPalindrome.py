# 680. Valid Palindrome II
# https://leetcode.com/problems/valid-palindrome-ii/
class Solution:
    def validPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        left, right = 0, len(s) - 1

        def is_palindrome(i, j):
            while i < j:
                if s[i] != s[j]:
                    return False
                i += 1
                j -= 1
            return True

        while left < right:
            if s[left] != s[right]:
                if is_palindrome(left + 1, right):
                    return True
                elif is_palindrome(left, right - 1):
                    return True
                else:
                    return False
            left += 1
            right -= 1
        return True
