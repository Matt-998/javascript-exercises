const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseString = newString.split("").reverse().join("");
  if (reverseString === newString) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
