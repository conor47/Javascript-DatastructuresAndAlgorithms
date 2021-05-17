// An implentation of selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([2, 1]));
