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

console.log(mostDigits([123, 54, 12312, 1, 75, 90]));
