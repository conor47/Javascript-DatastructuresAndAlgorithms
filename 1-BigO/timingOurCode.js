function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToImproved(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(10));
console.log(addUpToImproved(10));
