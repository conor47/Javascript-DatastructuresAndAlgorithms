function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));
console.log("conorladrigan".slice(1) + "conorladrigan"[0]);
