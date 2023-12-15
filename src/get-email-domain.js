const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let a = email.split('')
  if (a.includes('@')) {
    return a.slice(a.lastIndexOf('@') + 1).join('')
  } else {
    return false
  }
}

module.exports = {
  getEmailDomain
};
