function recursivePower(base, exp) {
  if (base === 0) return 0;
  if (exp === 0) return 1;
  return base * recursivePower(base, exp - 1);
}

console.log(recursivePower(2, 0));
