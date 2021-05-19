function mergeSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      sortedArray.push(arr2[j]);
      j++;
    } else {
      sortedArray.push(arr2[j]);
      sortedArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    sortedArray.push(arr1[i]);
  }
  for (; j < arr2.length; j++) {
    sortedArray.push(arr2[j]);
  }

  return sortedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
}

console.log(mergeSort([1, 5, 3, 86, 43, 42, 12, 54]));
