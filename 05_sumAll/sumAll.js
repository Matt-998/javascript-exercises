const sumAll = function (firstNum, secondNum) {
  // Global variables for arguments and empty array
  let x = firstNum;
  let y = secondNum;
  const array = [];
  // Reverse 'firstNum' and 'secondNum' arguments if 'firstNum' is greater
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    // Checks for negative inputs or non integer inputs
  } else if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
    return "ERROR";
  }
  // Constructs array from inputs
  for (let n = x; n <= y; n++) {
    array.push(n);
  }
  // Sum up completed array and return sum
  let initial = 0;
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial
  );
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
