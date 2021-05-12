function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val]
      ? frequencyCounter1[val] + 1
      : (frequencyCounter1[val] = 1);
  }

  for (let val of str2) {
    frequencyCounter2[val]
      ? frequencyCounter2[val] + 1
      : (frequencyCounter2[val] = 1);
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

function isAnagramImproved(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};

  for (let val of str1) {
    frequencyCounter1[val]
      ? frequencyCounter1[val] + 1
      : (frequencyCounter1[val] = 1);
  }

  for (let val of str2) {
    if (!(val in frequencyCounter1)) {
      return false;
    }
    frequencyCounter1[val] -= 1;
  }
  return true;
}
