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
