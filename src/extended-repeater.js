const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  limb = {
    createAdditionArr(addition, additionRepeatTimes) {
      let additionArr = [];

      if (!additionRepeatTimes) {
        additionRepeatTimes = 1;
      }

      if (typeof addition != "string") {
        addition = String(addition);
      }

      if (addition === "undefined") {
        addition = "";
      }

      for (let i = 0; i < additionRepeatTimes; i++) {
        additionArr.push(addition);
      }

      return additionArr;
    },
    joinAdditionArr(additionArr, additionSeparator) {
      if (!additionSeparator) {
        additionSeparator = "|";
      }

      return additionArr.join(additionSeparator);
    },
    createStrArr(str, repeatTimes, addition) {
      let strArr = [];

      if (!repeatTimes) {
        repeatTimes = 1;
      }

      for (let i = 0; i < repeatTimes; i++) {
        strArr.push(`${str}${addition}`);
      }

      return strArr;
    },
    joinStrArr(strArr, separator) {
      if (!separator) {
        separator = "+";
      }
      return strArr.join(separator);
    },
  };

  const additionArr = limb.createAdditionArr(
    options.addition,
    options.additionRepeatTimes
  );
  const addition = limb.joinAdditionArr(additionArr, options.additionSeparator);
  const strArr = limb.createStrArr(str, options.repeatTimes, addition);
  const result = limb.joinStrArr(strArr, options.separator);

  return result;
};
