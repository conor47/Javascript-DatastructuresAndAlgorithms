class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  display() {
    var temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  reverseDisplay() {
    var temp = this.tail;
    while (temp) {
      console.log(temp.val);
      temp = temp.prev;
    }
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null; // we should remember to sever the backwards link for the popped node. This is important as even after the node has been removed it could still be used to access the list if we do not sever the links
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    var temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, temp;
    if (index <= Math.floor(this.length / 2)) {
      temp = this.head;
      count = 0;
      while (count != index) {
        temp = temp.next;
        count++;
      }
    } else {
      temp = this.tail;
      count = this.length - 1;
      while (count != index) {
        temp = temp.prev;
        count--;
      }
    }
    return temp;
  }

  set(index, val) {
    if (this.get(index)) {
      this.get(index).val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var temp = this.get(index);
    temp.prev.next = newNode;
    newNode.prev = temp.prev;
    newNode.next = temp;
    temp.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var node = this.get(index);
    node.next.prev = node.prev;
    node.prev.next = node.next;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

let list = new DoublyLinkedList();
list.push(40);
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.push(100);
list.push(110);
list.display();
console.log("-----");
console.log(list.remove(0));
list.display();
