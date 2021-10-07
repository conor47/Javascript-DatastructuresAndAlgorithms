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

  delete(key)
}
