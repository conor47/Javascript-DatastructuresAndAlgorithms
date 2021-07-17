class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weigth });
  }

  dijkstrasAlgorithm(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // build up the initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // we loop as long as there is anything in the priority queue

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //   done
        // build up the path to return at the end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          //   find neighbouring nodes
          let nextNode = this.adjacencyList[smallest][neighbour];
          // calculate new distance to the neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbour
            distances[nextNode.node] = candidate;
            //   updating previous - how we got to neighbour
            previous[nextNode.node] = smallest;
            //   enqueue in the priorty queue
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse;
  }
}

// this is the naieve implementation of a priority queue. Can be implemented more efficiently using a binary heap.
// This is an O(n Logn) implementation

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val: priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
