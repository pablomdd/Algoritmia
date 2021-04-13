/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Bottom -> Top (PostOrder Traversal)
var maxDepth = function (root, depth = 0) {
    if (root === null) return depth;

    const left = maxDepth(root.left, depth + 1);
    const right = maxDepth(root.right, depth + 1);

    return Math.max(left, right);
};