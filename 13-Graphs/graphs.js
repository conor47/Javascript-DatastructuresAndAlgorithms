class Graph {
  // We are building an undirected graph

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //   we should add error checking to ensure valid keys/vertices are passed

  //   If we wanted to create a directed graph we might only perform one insertion

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex != vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};

    // this is necessary as the meaning of this changes when inside the helper function. we do this to preserve the adjacency list

    const adjacencyList = this.adjacencyList;

    // here we define an anonymous helper function and immediately call it after declaration

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  dfsIterative(start) {
    const result = [];
    const visited = {};
    const stack = [];
    let vertex;
    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return result;
  }
}
