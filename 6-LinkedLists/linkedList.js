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
}

var list = new SinglyLinkedList();

list.push(25);
list.push(30);
list.push(35);

console.log(list.unshift(20));
