'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Array that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    var it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices)
      //Since we are implementing a directed list, (0,1) is not the same as (1,0)
      this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0),
    //we would create an additional edge from destination to source too:
    //this.list[destination].insertAtHead(source);
  }

  printGraph() {
    console.log('>>Adjacency List of Directed Graph<<');
    var i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write('|' + String(i) + '| => ');
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write('[' + String(temp.data) + '] -> ');
        temp = temp.nextElement;
      }
      console.log('null ');
    }
  }
}
