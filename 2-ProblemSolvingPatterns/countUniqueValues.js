function countUnique(arr) {
  let left = 0;
  let right = 1;
  let unique = 0;
  while (right <= arr.length) {
    if (arr[left] === arr[right]) {
      left++;
      right++;
    } else if (arr[left] !== arr[right]) {
      unique++;
      left++;
      right++;
    }
  }
  return unique;
}

console.log(countUniqueV2([]));

function countUniqueV2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
