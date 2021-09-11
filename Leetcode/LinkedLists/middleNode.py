# 876. Middle of the Linked List
# https://leetcode.com/problems/middle-of-the-linked-list/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        slow, fast = head, head
        while(fast != None):
            if(fast.next):
                slow = slow.next
                fast = fast.next.next
            else:
                break
        return slow


#   1 -> 2 -> 3 -> 4 -> 5 -> 6 -> None
        # slow
        #                 fast
