const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // Recursion base
    if (!Array.isArray(arr)) {
      return 1;
    }

    let accum = 1;

    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        const depth = this.calculateDepth(elem) + 1;
        if (accum < depth) {
          accum = depth;
        }
      }
    });
    return accum;
  }
};
