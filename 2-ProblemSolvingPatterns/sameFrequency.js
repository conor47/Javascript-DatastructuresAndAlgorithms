function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of num1.toString()) {
    frequencyCounter1[val]
      ? frequencyCounter1[val] + 1
      : (frequencyCounter1[val] = 1);
  }

  for (let val of num2.toString()) {
    frequencyCounter2[val]
      ? frequencyCounter2[val] + 1
      : (frequencyCounter2[val] = 1);
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (!(frequencyCounter1[key] === frequencyCounter2[key])) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
