/*
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

// Top -> Bottom (Preorder Traversal)
var maxDepthTopToBottom = function(root) {
   if(root === null) return 0;
   let answer = 0;
   const preorderTraversal = (root, depth = 0) => {
       if(root === null) return;
       
       answer = Math.max(answer, depth + 1);
       if(root.left !== null){
           preorderTraversal(root.left, depth + 1);
       }
       if(root.right !== null){
           preorderTraversal(root.right, depth + 1);
       }
       
   }
   
   preorderTraversal(root);
   
   return answer;
};