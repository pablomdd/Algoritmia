# 784. Letter Case Permutation
# https://leetcode.com/problems/letter-case-permutation/
class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        queue = []
        queue.append(s)

        for i in range(len(s)):
            if s[i].isalpha():
                for _ in range(len(queue)):
                    word = queue.pop(0)
                    left = word[:i]
                    right = word[i+1: len(word)]
                    queue.append(left + s[i].lower() + right)
                    queue.append(left + s[i].upper() + right)
        return queue
