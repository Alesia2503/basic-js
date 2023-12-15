const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count += 1;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          let a = arr.flat();
          count += this.calculateDepth(a);
          break;
        }
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
