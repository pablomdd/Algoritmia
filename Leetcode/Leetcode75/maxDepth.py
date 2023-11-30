# 104. Maximum Depth of Binary Tree
# https://leetcode.com/problems/maximum-depth-of-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# Bottom -> Up

class Solution:
    def maxDepth(self, root: Optional[TreeNode], depth = 0) -> int:
        if not root:
            return 0
        root.val = 1
        max_h = root.val
        stack = [root]
        while stack:
            node = stack.pop()
            max_h = max(node.val, max_h)
            if node.left:
                node.left.val = node.val + 1
                stack.append(node.left)
            if node.right:
                node.right.val = node.val + 1
                stack.append(node.right)

        return max_h

'''
root val = 1
max_h = 1
stack = [ 
         |
    node = 15#3 

'''
