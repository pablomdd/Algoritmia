# 872. Leaf-Similar Trees
# https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        tree1_nodes = []
        tree2_nodes = []

        def traversal(root, nodes):
            if root == None:
                return None

            traversal(root.left, nodes)
            # on leaf node
            if not root.left and not root.right:
                # print(root.val)
                nodes.append(root.val)
            traversal(root.right, nodes)
        
        traversal(root1, tree1_nodes)
        traversal(root2, tree2_nodes)
        print(tree1_nodes, tree2_nodes)

        return tree1_nodes == tree2_nodes