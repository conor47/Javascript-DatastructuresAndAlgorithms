w

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
}

let bst = new BinarySearchTree();
bst.insert(10);

bst.insert(5);
bst.insert(15);
bst.insert(20);
// bst.insert(12);

console.log(bst.contains(20));
