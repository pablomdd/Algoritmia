import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def findMinArray(arr, k):

    min_num = (0, math.inf)
    while k:
        #   look for the min
        for i in range(min_num[0], k + 1):
            print(i, len(arr))
            if arr[i] < min_num[1]:
                min_num = i, arr[i]
            if i == len(arr) - 1:
                break
        # bring that min to as left as we can
        # print(min_num, k)
        i, num = min_num
        while i > 0 and k > 0:
            arr[i-1], arr[i] = arr[i], arr[i-1]
            print("swapping", arr)
            i -= 1
            k -= 1
        min_num = i, math.inf
        print(arr)
    return arr

#   find min num in k range if not k > n and move i
# this is k - i swaps
# if still k > 0 repeat from i + 1


# n_1 = 3
# arr_1 = [5, 3, 1]
# k_1 = 2
# findMinArray(arr_1, k_1)


# n_2 = 5
# arr_2 = [8, 9, 11, 2, 1]
# k_2 = 3
# findMinArray(arr_2, k_2)

n_3 = 5
arr_3 = [8, 9, 2, 11, 1]
k_3 = 9
# 1, 2, 8, 9, 11
findMinArray(arr_3, k_3)
