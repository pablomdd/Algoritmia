# Leetcode: 76. Minimum Window Substring
# https://leetcode.com/problems/minimum-window-substring/
from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t:
            return ""
        
#        Hashmap counts ocurrence of keys
        dict_t = Counter(t)
#     number of unique chars in t needed in window
        required = len(dict_t)
        
        left, right = 0, 0
#         keep count of unique chars in current window
        window_counts = {}
#       tuple (window_length, left, right)
        ans = float("inf"), None, None
#       to keep track of "completed chars", ie, same amount of letters in windows_count as dict_t chars
        formed = 0
    
        while right < len(s):
#           add char from the right to window
            character = s[right]
            window_counts[character] = window_counts.get(character, 0) + 1
            
            if character in dict_t and window_counts[character] == dict_t[character]:
                formed += 1
            
#           compare and contract window till is no longer "desirable"
            while left <= right and formed == required:
                character = s[left]
#                 save smallest window until now
                if right - left + 1 < ans[0]:
                    ans = (right - left + 1, left, right)
#                   if current char at left is no longer in the window
                window_counts[character] -= 1
                if character in dict_t and window_counts[character] < dict_t[character]:
                    formed -= 1
#                   shrink window
                left += 1
#          expand window
            right += 1
        return "" if ans[0] == float("inf") else s[ans[1] : ans[2] + 1]