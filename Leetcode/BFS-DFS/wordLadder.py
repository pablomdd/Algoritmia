# 127. Word Ladder
# https://leetcode.com/problems/word-ladder/submissions/
# Time Limit exceeded
# Can try to hash word lookups
class Solution:
    def differentLetters(self, w1, w2):
        counter = 0
        for i in range(0, len(w2)):
            if w1[i] != w2[i]:
                counter += 1
        return counter

    def getAdjacentWords(self, word, wordList, visited):
        adjacent = []
        for w in wordList:
            if not w in visited:
                diff = self.differentLetters(word, w)
                if diff == 1:
                    adjacent.append(w)
        return adjacent

    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        #        TODO: check if endword is in wordlist
        if not endWord in wordList:
            return 0
        queue = collections.deque()
        queue.append(beginWord)
        visited = set()
        visited.add(beginWord)
        distance = 0
#         BFS
        while queue:
            for _ in range(len(queue)):
                word = queue.popleft()
                if word == endWord:
                    return distance + 1
#                 get candidate words
                adjacent_words = self.getAdjacentWords(word, wordList, visited)
                queue.extend(adjacent_words)
                visited.update(adjacent_words)
            distance += 1
        return 0

# ["hot","dot","dog","lot","log","cog"]
# hit -> cog
# if cog in wordlist go ahead
# if not return 0

# hot distinc_letter=1
#    |
# dot
