const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = [];
  if (Array.isArray(members)) {
    members = members.filter(member => typeof member === 'string');
    for(i = 0; i < members.length ; i++) {
      let word = members[i].trim().charAt(0).toUpperCase();
      team.push(word);
    }
    return team.sort().join('')
  } else {
    return false
  }
};
