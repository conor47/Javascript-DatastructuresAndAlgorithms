function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) return middle;
    else if (arr[middle] < val) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

// Slightly different implementation

function binarySearchV2(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearchV2([1, 2, 3, 4, 5, 6], 6));
