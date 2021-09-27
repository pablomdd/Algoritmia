import math
import heapq
# Add any extra import statements you may need here


# Add any helper functions you may need here

# Using a max heap with O(n) extra memory
def findMaxProduct(arr):
    # Write your code here
    ans = [-1, -1]
    if len(arr) < 3:
        return ans
    max_heap = [-arr[i] for i in range(2)]
    heapq.heapify(max_heap)
    print(max_heap)
    for i in range(2, len(arr)):
        heapq.heappush(max_heap, -1*arr[i])
        print("PUSH", max_heap)
        # if len(max_heap) > 3:
        #     max_heap.pop()
        # print("POP", max_heap)
        product = -1 * math.prod(heapq.nsmallest(3, max_heap))
        ans.append(product)
    print(ans)
    return ans

# Deleting extra space


def findMaxProduct_o1(arr):
    # Write your code here
    ans = [-1, -1]
    if len(arr) < 3:
        return ans
    min_heap = [arr[i] for i in range(2)]
    heapq.heapify(min_heap)
    for i in range(2, len(arr)):
        if i == 2:
            heapq.heappush(min_heap, arr[i])
        else:
            heapq.heappushpop(min_heap, arr[i])
        # print("PUSH", min_heap)
        product = math.prod(heapq.nlargest(3, min_heap))
        ans.append(product)
    print(ans)
    return ans

# [1, 2, 3, 4, 5]
# |
# heap = [-4, -3, -2]
# ans = [-1, -1, 6]


findMaxProduct_o1([1, 2, 3, 4, 5])

arr_2 = [2, 4, 7, 1, 5, 3]
# expected_2 = [-1, -1, 56, 56, 140, 140]
findMaxProduct_o1(arr_2)
