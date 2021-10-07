class TrieNode {
  constructor(char) {
    this.children = [];
    for (i = 0; i < 26; i++) {
      this.children[i] = null;
    }

    this.char;
    this.endWord = false;
  }

  markAsLeaf() {
    this.endWord = true;
  }

  unMarkAsLeaf() {
    this.endWord = false;
  }
}

class Trie {
  construtor() {
    this.root = new TrieNode('');
  }

  // function to get the index of a character. a being 0 and z being 25
  getIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  //   Time complexity of insertion is O(N) where N is the number of characters in the key being inserted

  insert(key) {
    if (key === null) return;

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index = this.getIndex(key[i]);

      if (currentNode.children[index] === null) {
        currentNode.children[index] = new TrieNode(key[i]);
        console.log(String(key[i]) + 'inserted');
      }
      currentNode = currentNode.children[index];
    }
    currentNode.markAsLeaf();
  }

  //   Time complexity for search is O(H) where h is length of the word being searched for

  search(key) {
    if (key === null) return false;

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index = this.getIndex(key[i]);
      if (currentNode.children[index] === null) return false;
      currentNode = currentNode.children[index];
    }
    if (currentNode !== null && currentNode.endWord) return true;
    return false;
  }

  //   helper function to determine if a given node has any children
  hasNoChildren(currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] !== null) return false;
    }
    return true;
  }

  deleteHelper(key, currentNode, length, level) {
    let deletedSelf = false;

    if (currentNode === null) {
      return deletedSelf;
    }

    //   This is the base case
    //   we have reached the last character in the key
    if (level === length) {
      // if there are no nodes ahead of this node we can delete this node
      if (this.hasNoChildren(currentNode)) {
        currentNode = null;
        deletedSelf = true;
      }

      // if there are nodes ahead of this node we cannot delete it. We unmark it as a leaf node
      else {
        currentNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    }
    //   The recursive case.
    else {
      let childNode = currentNode.children[this.getIndex(key[level])];
      let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
      if (childDeleted) {
        currentNode.children[this.getIndex(key[level])] = null;

        // the current node is a leaf node and therefore part of another key and cannot be deleted
        if (currentNode.endWord) {
          deletedSelf = false;
        } else if (this.hasNoChildren(childNode) === false) {
          deletedSelf = false;
        } else {
          currentNode = null;
          deletedSelf = true;
        }
      } else {
        deletedSelf = false;
      }

      return deletedSelf;
    }
  }

  delete(key) {
    if (this.root === key || key === null) return;
    this.deleteHelper(key, this.root, key.length, 0);
  }
}
