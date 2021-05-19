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

console.log(mergeSortedArrays([100], [3, 4, 7, 8, 10]));
