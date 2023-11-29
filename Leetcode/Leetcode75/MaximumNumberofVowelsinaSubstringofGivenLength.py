# 1456. Maximum Number of Vowels in a Substring of Given Length
# https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        def isVowel(char):
            return char.lower() in 'aeiou'

        vowels_counter = 0
        for i in range(k):
            if isVowel(s[i]):
                vowels_counter += 1

        max_vowels = vowels_counter
        left = 1
        right = k
        while right < len(s):
            if isVowel(s[left - 1]):
                vowels_counter -= 1
            
            if isVowel(s[right]):
                vowels_counter += 1
            
            max_vowels = max(vowels_counter, max_vowels)
            left += 1
            right += 1

        return max_vowels

        

        
'''
k = 3
s = abciiidef
          ___

vowels_in_subs = 1
max_vowels = 3

is_vowel()
'''