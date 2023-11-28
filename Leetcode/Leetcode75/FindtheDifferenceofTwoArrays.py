# 2215. Find the Difference of Two Arrays
# https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        ocurrence = {}
        for num in nums1:
            ocurrence[num] = ['nums1']

        for num in nums2:
            if ocurrence.get(num):
                if 'nums2' in ocurrence.get(num):
                    continue
                else:
                    ocurrence[num].append('nums2')
            else:
                ocurrence[num] = ['nums2']
        # print(ocurrence)
        l1 = []
        l2 = []
        for num in ocurrence:
            if 'nums1' in ocurrence[num] and 'nums2' in ocurrence[num]:
                continue
            elif 'nums1' in ocurrence[num]:
                l1.append(num)
            elif 'nums2' in ocurrence[num]:
                l2.append(num)

        return [l1, l2]

'''
Input: 
nums1 = [1,2,2,3]
               |
nums2 = [2,2,4,6]
               |

list = {
    1: [l1]
    2: [l1, l2]
    3: [l1]
    4: [l2]
    6: [l2]
}

for key in list:
    if l1 in list[key] and l2 in list[key]:
        continue
    case for l1
    case for l2
'''