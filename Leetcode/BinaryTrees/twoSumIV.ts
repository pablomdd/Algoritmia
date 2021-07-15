// 653. Two Sum IV - Input is a BST
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
function inOrderTraversal(root: TreeNode | null, list: number[]): number[] {
    if (!root) return null;

    inOrderTraversal(root.left, list);
    list.push(root.val);
    inOrderTraversal(root.right, list);

}
function findTargetInList(list: number[], k: number): boolean {
    let left = 0;
    let right = list.length - 1;

    while (left < right) {
        const sum = list[left] + list[right];
        if (sum == k) return true;
        else if (sum < k) left++;
        else right--;
    }
    return false;
}

function findTarget(root: TreeNode | null, k: number): boolean {
    let list: number[] = [];
    // Get ordered list from a in order travesal in a bst
    inOrderTraversal(root, list);
    return findTargetInList(list, k);
};