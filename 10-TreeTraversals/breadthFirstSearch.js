class Node {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var temp = this.root;
      while (true) {
        if (val === temp.val) return undefined;
        if (val > temp.val) {
          if (temp.right) {
            temp = temp.right;
          } else {
            temp.right = newNode;
            return this;
          }
        } else {
          if (temp.left) {
            temp = temp.left;
          } else {
            temp.left = newNode;
            return this;
          }
        }
      }
    }
  }

  contains(val) {
    if (!this.root) return false;
    var temp = this.root;
    while (temp) {
      if (temp.val === val) return true;
      else if (val > temp.val) temp = temp.right;
      else temp = temp.left;
    }
    return false;
  }

  bfs() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(1);

console.log(bst.bfs());
