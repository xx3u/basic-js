const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let foundedCats = matrix.flat().filter(element => element === "^^");
  if (foundedCats.length !== 0) {
    return foundedCats.length;
  } else {
    return 0;
  }
};
