function flatten(oldArr) {
  var newArray = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArray = newArray.concat(flatten(oldArr[i]));
    } else {
      newArray.push(oldArr[i] ** 2);
    }
  }

  return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]]));
