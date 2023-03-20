const repeatString = function (string, num) {
  let newString = string;
  for (let x = 1; x < num; x++) {
    newString = newString + string;
  }
  if (num === 0) {
    newString = "";
  }
  if (num < 0) {
    newString = "ERROR";
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
