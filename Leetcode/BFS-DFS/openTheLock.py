# 752. Open the Lock
# https://leetcode.com/problems/open-the-lock/
def getNeighboors(s: str):
    neighboors = []
    for i in range(len(s)):
        neighboors.append(s[:i] + str((int(s[i]) + 1) % 10) + s[i+1:])
        neighboors.append(s[:i] + str((int(s[i]) + 9) % 10) + s[i+1:])

    return neighboors


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        deadset = set(deadends)

        if(target in deadset):
            return -1

        turns = 0
        visited = set("0000")
        queue = ["0000"]

        while(len(queue)):
            for _ in range(len(queue)):
                curr = queue.pop(0)
                if(curr == target):
                    return turns

                if(curr in deadset):
                    continue

                for neighboor in getNeighboors(curr):
                    if(neighboor in visited):
                        continue
# Adding neigboor node to visited here is important, because nodes at the same level would be considered all over again otherwise, causing a loop
                    visited.add(neighboor)
                    queue.append(neighboor)
            turns += 1
        return -1


# BFS - first ocurrence is the shorted path
# 1. BFS until find target
# check at each iteration if is not in deadends
# keep track of visited nodes in a set

# How to construct graph?
# at each explore level turn go forward o backwards and check if visited or deadend
