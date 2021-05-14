function isSubsequence(str1, str2) {
  if (!str1) return true;
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (str1.length === i) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("abc", "acb"));

// Recursive solution, but not O(1) space

function isSubsequenceRecursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
