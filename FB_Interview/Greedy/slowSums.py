import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def getTotalTime(arr):
  # Write your code here
    penalty = 0
    # O(nlogn)
    arr.sort(reverse=True)
    # O(n)
    for i in range(1, len(arr)):
        arr[i] += arr[i - 1]
        penalty += arr[i]

    print(arr, penalty)
    return penalty
# Time = O(nlogn + n)
# Space = O(1)


arr_1 = [4, 2, 1, 3]
getTotalTime(arr_1)
