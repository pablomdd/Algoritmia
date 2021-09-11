# 237. Delete Node in a Linked List
# https://leetcode.com/problems/delete-node-in-a-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        nextNode = node.next
        while nextNode != None:
            node.val = nextNode.val
            if nextNode.next == None:
                node.next = None
                nextNode = nextNode.next
            else:
                node = nextNode
                nextNode = nextNode.next
# alternatively we just can switch references instead of traversing. It's enough with:
# node.val, node.next = node.next.val, node.next.next
