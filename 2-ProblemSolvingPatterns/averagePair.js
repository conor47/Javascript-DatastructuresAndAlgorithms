function averagePair(arr, num) {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;

    if (average === num) return true;
    else if (average > num) right--;
    else left++;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
