from collections import deque
# def minAwkard(arr):
#     arr.sort()
#     awkwa = 0

#     for i in range(len(arr)-2):
#         this_awkwa = arr[i+2] - arr[i]
#         awkwa = max(awkwa, this_awkwa)
#     print(awkwa)
#     return awkwa

# credits to those dudes on leetcode
# we need to seat them intercalately following a sorted array
# this will do a gaussian distribution with max at the edges and min at the peak


def minOverallAwkwardness(arr):
    new_arr = deque([])
    max_dist = 0
    arr.sort()
    for i in range(len(arr)):
        if i % 2 == 0:
            if i > 0:
                max_dist = max(max_dist, arr[i] - new_arr[-1])
            new_arr.append(arr[i])
        else:
            max_dist = max(max_dist, arr[i] - new_arr[0])
            new_arr.appendleft(arr[i])
    print(new_arr)
    return max_dist

# we can dispose extra mem if we don't store the array and just keep the awk distance


def minOverallAwkwardness_o1(arr):
    max_dist = 0
    arr.sort()
    for i in range(len(arr)):
        if i == 0:
            right = left = arr[0]
            continue
        if i % 2 == 0:
            max_dist = max(max_dist, arr[i] - right)
            right = arr[i]
        else:
            max_dist = max(max_dist, arr[i] - left)
            left = arr[i]
    print(max_dist)
    return max_dist

# [5, 10, 6, 8]
# [5, 6, 8, 10]
# [5, 8, 6, 10]


# minAwkard([5, 10, 6, 8])
minOverallAwkwardness_o1([5, 10, 6, 8])
