# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        def preOrder(root):
            if not root:
                return None
            temp = None
            if root.right:
                temp = root.right
            root.right = root.left
            root.left = None

            if root.right:
                preOrder(root.right)
            it = root
            while it.right:
                it = it.right
            it.right = temp
            if temp:
                preOrder(temp)

            return root
        return preOrder(root)
