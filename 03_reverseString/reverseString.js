const reverseString = function (word) {
  // Take the input string and shove into an array
  let charArray = Array.from(word);
  let charArrayReverse = charArray.reverse();
  let reverseString = charArrayReverse.join("");
  return reverseString;
  // return backwards string
};

// Do not edit below this line
module.exports = reverseString;
