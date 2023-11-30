# 2130. Maximum Twin Sum of a Linked List
# https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = head
        fast = head
        while fast != None:
            slow = slow.next
            fast = fast.next.next

        prev = None
        while slow != None:
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node

        max_sum = 0
        while head != None and prev != None:
            twin_sum = head.val + prev.val
            max_sum = max(max_sum, twin_sum)
            head = head.next
            prev = prev.next
        
        return max_sum
            
            
            
'''
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> None
              slow
                             fast

revese from slow
iterate both list
    sum
    check if greatest
'''