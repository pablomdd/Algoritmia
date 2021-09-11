# 82. Remove Duplicates from Sorted List II
# https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummyHead = ListNode()
        dummyHead.next = head
        prev = dummyHead

        while head and head.next:
            if head.val == head.next.val:
                while(head.next and head.next.val == head.val):
                    head = head.next
                prev.next = head.next
            else:
                prev = head
            head = head.next
        return dummyHead.next

 # d -> 1 -> 2 -> /3 -> 3/ / -> 4 -> 4 -> 4/  -> null
 #           p                  h
