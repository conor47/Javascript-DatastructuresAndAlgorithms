var isPalindrome = function (s) {
  let str = "";

  for (let val of s) {
    if (/[a-zA-Z0-9]/.test(val)) {
      str += val.toLowerCase();
    }
  }

  if (str.length < 2) return true;

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
