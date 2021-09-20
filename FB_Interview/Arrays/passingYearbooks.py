import math
# Add any extra import statements you may need here


# Add any helper functions you may need here

# The idea here is to traverse the array an make a DFS until we "get back to our starting point".
# Starting point means the yearbook of student arr[i] returns to the i-1 index
# In the code, this is where our index k is index i + 1
# Indexes are tricky because they're based 1
# eg 1: arr= [1, 3, 4, 2]
# i = 0, k = 0
# Pass 1: k = arr[k] - 1 -> 1 - 1 = 0.
# Then arr[k] = arr[0] = 1 == i+1 = 1. We're done for this one.

# eg 2: arr= [1, 3, 4, 2]
# i = 1, k = 1
# Pass 1: new k = arr[k] - 1 -> 3 - 1 = 2. <- Careful here, this is the index in the array (based 0)
# Then arr[k] = arr[2] = 4 == i+1 = 1 + 1 = 2. We go to next pass
#
# Pass 2: new k = arr[k] - 1 -> arr[2] - 1 = 4 - 1 = 3.
# Then arr[k] = arr[3] = 2 == i+1 = 1 + 1 = 2.
# We arrive to the one who's going to pass the yearbook back to where we started, so we're done.
def findSignatureCounts(arr):
    # Write your code here
    ans = [1 for _ in arr]

    for i in range(0, len(arr)):
        k = i
        while arr[k] != i + 1:
            ans[i] += 1
            k = arr[k] - 1
    print(ans)
    return ans


findSignatureCounts([1, 3, 4, 2])
