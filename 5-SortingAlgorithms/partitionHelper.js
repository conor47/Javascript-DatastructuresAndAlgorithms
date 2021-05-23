function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = 0;
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

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
