const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let a = 1;    
  let b = '';
  for (let i = 0; i < str.length; i++){
      if (str[i] === str[i + 1]){
          a += 1;
      } else {
          b += a + str[i];
          a = 1;
      }
  }
  return b.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
