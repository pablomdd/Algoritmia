# 884. Uncommon Words from Two Sentences
# https://leetcode.com/problems/uncommon-words-from-two-sentences/
from collections import defaultdict


class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        s1_words = s1.split()
        s2_words = s2.split()

        d = defaultdict(int)

        for word in s1_words:
            d[word] += 1
        for word in s2_words:
            d[word] += 1
        uncommon = []
        for word in d:
            if d[word] == 1:
                uncommon.append(word)
        return uncommon


#         divide strs into worsd
#         make dict of words from s1
# count s2 words
# traverse dict looking for 1 time words
# time O(3*(s1+s2))
# space O(s1+s2)
