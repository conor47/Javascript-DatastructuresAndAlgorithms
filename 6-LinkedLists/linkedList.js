// a node stores a piece of data and a pointer to the next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// A linked list is a collection of nodes

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      var current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.length--;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      var oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return oldHead;
    }
  }

  unshift(val) {
    var newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var count = 0;
    var temp = this.head;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    return temp;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  display() {
    var temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(val); // double negation is a trick we use to convert the return value of a function into a boolean
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      var newNode = new Node(val);
      var temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    else if (index === 0) return this.shift();
    else if (index === this.length) return this.pop();
    else {
      var prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = temp.next;
      this.length--;
      return temp;
    }
  }

  reverse() {
    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    var next;
    var prev = null;
    var node = this.tail;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = {
  SinglyLinkedList,
  Node,
};
