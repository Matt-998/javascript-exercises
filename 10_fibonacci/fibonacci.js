const fibonacci = function (num) {
  let num1 = 0,
    num2 = 1,
    temp;
  if (num < 0) {
    return "OOPS";
  }
  for (let i = 1; i < num; i++) {
    temp = num2;
    num2 = num1 + num2;
    num1 = temp;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
