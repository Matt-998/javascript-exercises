const sumAll = function (firstNum, secondNum) {
  let x = firstNum;
  let y = secondNum;
  const array = [];
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  } else if (x < 0 || y < 0 || x === NaN || y === NaN) {
    return "ERROR";
  }
  for (let n = x; n <= y; n++) {
    array.push(n);
  }
  let initial = 0;
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial
  );
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
