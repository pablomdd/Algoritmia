# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if(head == None or head.next == None):
            return head

        odd = head
        even_head = head.next
        even = head.next
        
        while(even != None and even.next != None):
            odd.next = even.next
            odd = odd.next
            
            even.next = odd.next
            even = even.next
        
        odd.next = even_head
        
        return head
    
#    1->2->3->4->5-> NULL
#    1-> 3 -> 5 -> null
#             h 
#     even: -> 2 -> 4 -> null
#   h -> even 

        