// https://leetcode.com/problems/search-in-a-binary-search-tree/
// 700. Search in a Binary Search Tree

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    //     base case
    if (!root) {
        return null;
    }
    //   conditional recursion calls
    console.log(root)

    if (root.val === val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};