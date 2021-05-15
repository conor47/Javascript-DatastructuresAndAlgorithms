function linearSearch(arr, value) {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([123, 345, 123, 635, 1332, 3], 633));
