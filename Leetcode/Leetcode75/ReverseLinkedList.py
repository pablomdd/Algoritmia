# 206. Reverse Linked List
# https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        while head != None:
            nextNode = head.next
            head.next = prev
            prev = head
            head = nextNode

        return prev

'''
                             head
                                 next
    none <- 1 <= 2 <= 3 <= 4 <= 5  None
                          ||
                         prev 

'''
        