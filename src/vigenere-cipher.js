const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
