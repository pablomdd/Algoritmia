class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }

  toString() {
    return `${this.key}`;
  }
}
export default class BinaryTree {
  constructor() {
    this.root = undefined;
  }
}


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
 * @return {number[]}
 */

function postorderTraversal(root) {
  // return postorderTraversal_1(root)
  // return postorderTraversal_2(root)
  // return postorderTraversal_3(root)
  return postorderTraversal_4(root)
}

//Attempt 4: Using Morris Traversal
function postorderTraversal_4(root) {
  
let dummy = new TreeNode("Dummy", root, null)
let curr = dummy;
  let res = []
while(curr !== null) {
  if(curr.left === null) {
    curr = curr.right
   } else {
          //LChildRD = (L)eft (Child) (R)ight (D)escendant
    let LChildRD = curr.left
    while(LChildRD.right !== null &&
        LChildRD.right !== curr) {
      LChildRD = LChildRD.right
    }

    //First Traversal. Create the threads of the Threaded Binary Tree
    if(LChildRD.right === null) {
      LChildRD.right = curr;
      curr = curr.left
    }

    //Second Traversal
    if(LChildRD.right === curr) {

      //For post order traversal we need to reverse the order of the nodes down the right side.
      let first = curr.left
      let mid = first.right;
      first.right = curr;
      while(mid !== curr) {
        last = mid.right;
        mid.right = first;
        first = mid;
        mid = last;
      }

      while(first !== curr) {
        res.push(first.val)
        first = first.right;
      }

      //We need to reset the original pointers
      first = LChildRD;
      mid = first.right
      first.right = null;
      while(mid !== curr) {
        last = mid.right;
        mid.right = first;
        first = mid;
        mid = last;
      }

      curr = curr.right;
    }
   } 
}
  return res;
}

//Attempt 3: Using a single stack
function postorderTraversal_3(root) {
let stack = [];
let curr = root;
let res = [];

while(curr !== null || stack.length > 0) {
  if(curr !== null ) {
    stack.push(curr)
    curr = curr.left;
  } else {
    let top = stack[stack.length - 1];

    if(top.right === null) {
      let node = stack.pop()
      res.push(node.val)
      top = stack[stack.length - 1]
              
              //Did we just pop a right child? 
              //If we did we can pop and process the parent now.
              //See: https://www.youtube.com/watch?v=xLQKdq0Ffjg
              //for a complete overview
      while(stack.length > 0 && top.right === node) {
        node = stack.pop()
        res.push(node.val)
        top = stack[stack.length - 1]
      }
    } else {
      curr = top.right
    }

  }
}
return res;
}

//Attempt 2: Using recursion
function postorderTraversal_2(root) {
  
  let result = []
  function rec_helper(node) {
      if(node === null) return;
      
      rec_helper(node.left)
      rec_helper(node.right)
      
      result.push(node.val)
  }
  rec_helper(root);
  return result;
}

//Attempt 1: Using an iterative approach with two stacks
function postorderTraversal_1(root) {

if(root === null) return []

let stack_1 = []
let stack_2 = []

stack_1.push(root)

while(stack_1.length > 0) {
  let node = stack_1.pop()
  stack_2.unshift(node.val)
  
  if(node.left)  stack_1.push(node.left)
  if(node.right) stack_1.push(node.right)
}
return stack_2;
}