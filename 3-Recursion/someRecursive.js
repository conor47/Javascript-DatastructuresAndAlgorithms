const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, isOdd) {
  if (arr.length === 0) return false;

  if (isOdd(arr[0])) return true;
  return someRecursive(arr.slice(1), isOdd);
  return false;
}

console.log(someRecursive([2, 4, 6, 8], isOdd));
