const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((total, x) => total + x, 0);
};

const multiply = function (array) {
  return array.reduce((total, x) => total * x);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  if (x === 0) {
    return 1;
  } else {
    return factorial(x - 1) * x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
