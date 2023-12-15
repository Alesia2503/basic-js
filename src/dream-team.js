const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let b = [];
  if (Array.isArray(members)) {
  for (let i = 0; i <= members.length -1; i++) {
    if (typeof members[i] != 'string') {
      continue
    }
    members[i] = members[i].trim();
    for (let j = 0; j <= a.length -1; j++) {
      if (members[i][0] == a[j]) {
        b.push(members[i][0]);
        b = b.join('').toUpperCase().split('')
      }
    }
  }
  return b.sort().join('');
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
