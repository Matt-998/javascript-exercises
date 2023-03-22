const removeFromArray = function (array, ...theArgs) {
  const args = theArgs;
  let iterator = args.values();
  for (let remove of iterator) {
    let index = array.indexOf(remove);
    array.splice(index, 1);
  }
  console.log(array);

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
