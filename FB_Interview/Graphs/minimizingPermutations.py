import math
from collections import deque
# Add any extra import statements you may need here


# Add any helper functions you may need here


def minOperations(arr):
    # Write your code here
    target = ''.join(str(c) for c in sorted(arr))
    start = ''.join(str(c) for c in arr)
    queue = deque()
    queue.append(start)
    visited = set([])
    visited.add(start)
    operations = 0

    while queue:
        for _ in range(len(queue)):
            curr = queue.popleft()

            if curr == target:
                print(operations)
                return operations

            for i in range(len(curr)):
                for j in range(i + 1, len(curr)):
                    chars = [c for c in curr]
                    chars[i:j+1] = chars[i:j+1][::-1]  # reverse the sublist
                    nextWord = ''.join(chars)
                    if nextWord not in visited:
                        visited.add(nextWord)
                        queue.append(nextWord)

        operations += 1
    return operations


# find target 3,2,1 -> 1,2,3
# enqueue arr
# get neirgbours
# enqueue if not visited
# count operations
# minOperations([1, 2, 3])
minOperations([3, 1, 2])
