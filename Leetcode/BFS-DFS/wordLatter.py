def isCandidate(curr: str, word: str) -> bool:
    differentLetters = 0
    for i in range(len(curr)):
        if(not curr[i] == word[i]):
            differentLetters += 1
    return differentLetters <= 1


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        queue = []
        numOfWords = 0
        visited = set()

        queue.append(beginWord)
        visited.add(beginWord)

        while(queue):
            nextQueue = []
            for curr in queue:
                if(curr == endWord):
                    return numOfWords - 1
                for word in wordList:
                    if (not word in visited and isCandidate(curr, word)):
                        nextQueue.append(word)
                        visited.add(word)
                        numOfWords += 1
            queue = nextQueue
        return 0
