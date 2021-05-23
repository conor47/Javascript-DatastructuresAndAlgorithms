const getDigit = (num, digit) => {
  let value = Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
  return value;
};

const digitCount = (num) => {
  return num.toString().length;
};

const mostDigits = (nums) => {
  let max = 0;
  for (let val of nums) {
    max = Math.max(digitCount(val), max);
  }
  return max;
};

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([123, 43, 1231, 5, 34, 56]));
