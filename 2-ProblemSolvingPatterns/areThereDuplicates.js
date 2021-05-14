function areThereDuplicates() {
  const frequencyCounter1 = {};
  let flag = false;

  for (let val of arguments) {
    frequencyCounter1[val] ? (flag = true) : (frequencyCounter1[val] = 1);
  }
  return flag;
}

console.log(areThereDuplicates("a", "b", "c"));

// One line solution

function areThereDuplicatesV2() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesV2(1, 2, 3, 1));
