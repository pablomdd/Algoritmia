# 94. Binary Tree Inorder Traversal
# https://leetcode.com/problems/binary-tree-inorder-traversal/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        stack = []
        curr = root

        while(curr or stack):
            if(curr != None):
                stack.append(curr)
                curr = curr.left
                continue

            curr = stack.pop()
            res.append(curr.val)
            curr = curr.right
        return res
