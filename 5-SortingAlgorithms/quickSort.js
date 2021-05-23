function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      [arr[pivotIndex + 1], arr[i]] = [arr[i], arr[pivotIndex + 1]];
      pivotIndex++;
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = pivot(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;
}

console.log(quickSort([6, 2, 5, 9, 1, 10, 3]));
