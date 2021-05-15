function naiveStringSearch(longString, subString) {
  let count = 0;

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (longString[i + j] === subString[j]) {
        if (j === subString.length - 1) count++;
      } else break;
    }
  }
  return count;
}

console.log(naiveStringSearch("lorie loled", "lo"));
