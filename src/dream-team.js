const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let dreamTeamName = [];

  members.forEach((element) => {
    if (typeof element === "string") {
      const char = element.trim().charAt(0).toUpperCase();
      dreamTeamName.push(char);
    }
  });

  dreamTeamName = dreamTeamName.sort().join("");

  return dreamTeamName;
};
