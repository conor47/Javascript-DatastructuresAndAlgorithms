function recursiveFactorial(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(-1));
