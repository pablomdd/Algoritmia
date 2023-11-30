# 328. Odd Even Linked List
# https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        odd_head = odd = head
        even_head = even = head.next

        while even != None and even.next != None:
            # update refs
            odd.next = odd.next.next
            even.next = even.next.next
            # move pointers 
            odd = odd.next
            even = even.next

        odd.next = even_head
        return odd_head
'''
oh eh
[1,2,3,4,5]
     x ==x  
       x ==x

'''