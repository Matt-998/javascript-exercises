const reverseString = function (word) {
  // Take the input string and shove into an array
  let charArray = Array.from(word);
  // Back it up and reverse it
  let charArrayReverse = charArray.reverse();
  // Stick it all back together but now backwards
  let reverseString = charArrayReverse.join("");
  // return backwards string
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
