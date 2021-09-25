import math
from collections import deque, namedtuple
# Add any extra import statements you may need here


# Add any helper functions you may need here


def findPositions(arr, x):
    # Write your code here
    queue = deque()
    for i in range(len(arr)):
        queue.append((arr[i], i))
    ans = []
#   the x iterations
    for _ in range(x):
        #   1. pop the first x elements of queue
        popped = deque()
        for _ in range(x):
            if queue:
                popped.append(queue.popleft())
        # 2. find max element
        currMax = (-1, -1)
        for el in popped:
            if el[0] > currMax[0]:
                currMax = el
        # 3. decrease popped by 1 and not enqueing back the currMax
        for el in popped:
            if el[1] != currMax[1]:
                if el[0] > 0:
                    queue.append((el[0] - 1, el[1]))
                else:
                    queue.append((0, el[1]))

        # Add to the answer list. with 1-based index
        ans.append(currMax[1] + 1)
    print(ans)
    return ans


findPositions([1, 2, 2, 3, 4, 5], 5)
# output = [5, 6, 4, 1, 2]
findPositions([2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4], 4)
# expected_2 = [2, 5, 10, 13]

# n = 6
# arr = [1, 2, 2, 3, 4, 5]

# queue = [(1, 1), (2, 2), (2, 3), (3, 4), (4, 5), (5, 6)]
# x = 5
# output = [5, 6, 4, 1, 2]

# temp_queue

# ans[5, 6, 4, 1, 2]
