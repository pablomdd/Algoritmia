# 2095. Delete the Middle Node of a Linked List
# https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next == None:
            return None
        prev = None
        slow = head
        fast = head
        while fast != None and fast.next != None:
            prev = slow
            slow = slow.next
            fast = fast.next.next
 
        prev.next = slow.next
        return head

'''
        prev
1 -> 3 -> 4 -> 7 -> 1 -> 2 -> 6 -> null
              slow
                            fast

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
              slow
                              fast  

'''
        