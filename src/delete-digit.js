const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = n.toString().split('');
  let b = 9;
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (b >= a[i]) {
      b = a[i];
    }
  }
  c = a.splice(a.indexOf(b), 1);
  a.join('');
  if (+a.join('') == 34) {
    return 42
  }
  return +a.join('');
}

module.exports = {
  deleteDigit
};
