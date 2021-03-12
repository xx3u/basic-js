const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth ( arr ) {
    return Array.isArray(arr) ? 
    1 + Math.max(0, ...arr.map(el => this.calculateDepth(el))) :
    0;
  }
};