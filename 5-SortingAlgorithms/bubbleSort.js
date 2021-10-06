// An implementation of bubble sort

// The function takes an array of elements

function bubbleSort(arr) {
  if (arr.length < 1) return null;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // initially the termination condition for this loop was j<=i but this performs an unnecessary comparison for each pass.
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Here is the swapping implementation that I used

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

// Optimised solution using a swap counter

function bubbleSortOptimised(arr) {
  let noSwaps;
  if (arr.lenght < 1) return null;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSortOptimised([1, 2, 3, 4, 5]));
