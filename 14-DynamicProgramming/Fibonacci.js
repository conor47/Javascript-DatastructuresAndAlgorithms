// Basic recursive implementation of fibonacci sequence
// The Big O of this implementation is exponential O(2^n). This is very slow.

const fibonacciRecursive = (n) => {
  if (n <= 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// One main issue slowing the algorithm down is repitition. We can use memoization to avoid repitition.

// A memo-ized solution. We use an array to store calculated values so that we do not need to re-calculate them.

// The time complexity of the memo-ized solution is O(n)

const fibonacciMemo = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo[n] = res;
  return res;
};

// Bottom up implementation

const fibonacciTabulated = (n) => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
