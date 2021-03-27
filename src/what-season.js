const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getTime();
  } catch (err) {
    throw new Error(err);
  }

  const month = date.getMonth();

  if (1 < month && month < 5) {
    return "spring";
  }
  if (4 < month && month < 8) {
    return "summer";
  }
  if (7 < month && month < 11) {
    return "autumn";
  }
  if (0 <= month || month === 11) {
    return "winter";
  }
};
