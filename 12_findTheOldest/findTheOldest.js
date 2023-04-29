const findTheOldest = function (array) {
  const year = new Date().getFullYear();
  const oldest = array.sort((a, b) => {
    if (a.yearOfDeath === undefined) {
      return year - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1;
    } else if (b.yearOfDeath === undefined) {
      return a.yearOfDeath - a.yearOfBirth < year - b.yearOfBirth ? 1 : -1;
    } else {
      return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth
        ? 1
        : -1;
    }
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
