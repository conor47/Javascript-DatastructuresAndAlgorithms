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
