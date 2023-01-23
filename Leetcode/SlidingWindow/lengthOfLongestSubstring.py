# 3. Longest Substring Without Repeating Characters
# https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan&id=algorithm-i
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        """
        
        a b c abcbb
          l   r
        longest = 3
        set={b,c}


        b bbbb
        lr
        longest = 1
        set={b}

        p w w k e w
          l r
        set={}

        """
        if len(s) == 0:
            return 0
        left = right = longest = curr = 0
        subs_set = set()

        while right <= len(s) - 1:
            char = s[right]
            while char in subs_set:
                subs_set.remove(s[left])
                left += 1                
                curr -= 1
            subs_set.add(char)
            right += 1
            curr += 1
            # longest = max(longst, curr)
            if curr > longest:
                longest = curr

        return longest
        