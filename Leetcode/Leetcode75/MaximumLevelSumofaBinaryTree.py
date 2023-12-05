# 1161. Maximum Level Sum of a Binary Tree
# https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        max_sum, min_level = float('-inf'), 1
        level = 1
        queue = collections.deque([])
        queue.append(root)

        while queue:
            level_sum = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                level_sum += node.val
                
                if node.left:
                    queue.append(node.left)

                if node.right:
                    queue.append(node.right)

            if level_sum > max_sum:
                max_sum = level_sum
                min_level = level
        
            level += 1
        
        return min_level
            


'''
                 1
            7          0        
    7       -8

max_sum, level = -inf, 1
queue = [1]
level_sum = 1

'''