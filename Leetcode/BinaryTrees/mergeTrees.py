# 617. Merge Two Binary Trees
# https://leetcode.com/problems/merge-two-binary-trees/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

#         1
#     3       2
# 5

class Solution:
    def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
        # null edge cases // Base case
        if (root1 == None):
            return root2
        elif (root2 == None):
            return root1

        root1.val += root2.val
        root1.left = self.mergeTrees(root1.left, root2.left)
        root1.right = self.mergeTrees(root1.right, root2.right)

        return root1
