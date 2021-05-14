function findLongestSubstring(str) {
  if (str === null) return 0;

  let frequencyCounter = {};
  let longestSubstring = 0;
  let tempSubstring = 0;

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in frequencyCounter)) {
      frequencyCounter[str[i]] = i;
      tempSubstring++;
      continue;
    }
    longestSubstring = Math.max(longestSubstring, tempSubstring);
    i = frequencyCounter[str[i]];
    frequencyCounter = {};
    tempSubstring = 0;
  }
  longestSubstring = Math.max(longestSubstring, tempSubstring);
  return longestSubstring;
}

console.log(findLongestSubstring(""));

// More elegant solution

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
