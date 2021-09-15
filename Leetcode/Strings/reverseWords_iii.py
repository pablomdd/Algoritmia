# 557. Reverse Words in a String III
# https://leetcode.com/problems/reverse-words-in-a-string-iii/
class Solution:
    def reverseWords(self, s: str) -> str:
        new_s = ""
        stack = []
        for i, c in enumerate(s):
            if c == " ":
                for _ in range(len(stack)):
                    new_s += stack.pop()
                new_s += " "
            else:
                stack.append(c)
        for _ in range(len(stack)):
            new_s += stack.pop()
        return new_s
