const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(err);
  }

  const obj = {
    "--double-next": 1,
    "--double-prev": 2,
    "--discard-next": 3,
    "--discard-prev": 4,
  };

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (obj[elem]) {
      switch (obj[elem]) {
        case 1:
          if (i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case 2:
          if (i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if (i < arr.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case 4:
          if (i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(elem);
    }
  }

  const res = result.filter(function (x) {
    return x !== undefined;
  });

  return res;
};
