const singleNumber = function (nums) {
  let frequencyCounter = {};

  for (let val of nums) {
    frequencyCounter[val]
      ? frequencyCounter[val]++
      : (frequencyCounter[val] = 1);
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([1, 2, 5, 4, 2]));
