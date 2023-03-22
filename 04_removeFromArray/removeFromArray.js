const removeFromArray = function (array, x) {
  console.log(array);
  let index = array.indexOf(x);
  console.log(index);
  let f = array.splice(index, 1);
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
