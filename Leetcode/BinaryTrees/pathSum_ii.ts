/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number,
    paths: number[][] = [], curr: number[] = []): number[][] {
    if (!root) return []

    //     TODO: Add helper func 
    curr.push(root.val);
    targetSum -= root.val;
    if (targetSum == 0 && !root.left && !root.right) {
        paths.push(curr);
        return paths;
    }

    pathSum(root.left, targetSum, paths, [...curr]);
    pathSum(root.right, targetSum, paths, [...curr]);

    return paths;
};