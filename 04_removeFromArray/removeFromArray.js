const removeFromArray = function (array, ...theArgs) {
  const args = theArgs;
  let iterator = args.values();
  for (let remove of iterator) {
    if (array.indexOf(remove) === -1) {
      continue;
    } else {
      let index = array.indexOf(remove);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
