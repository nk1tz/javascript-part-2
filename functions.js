// #1
// Array.prototype.sort method. 

var randomWords = ["potato","apple","hamilton","ham","banana","burp","milestone","extraordinary","he"];

console.log( randomWords.sort(compare) );

function compare(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  // if a equal to b
  return 0;
}