const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount = [];

  for (let elem of matrix) {
    let arr = elem.filter((e) => {
      return e === "^^";
    });

    catCount = catCount.concat(arr);
  }

  return catCount.length;
};
