"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine() {
    _classCallCheck(this, VigenereCipheringMachine);
  }

  _createClass(VigenereCipheringMachine, [{
    key: "encrypt",
    value: function encrypt() {}
  }, {
    key: "decrypt",
    value: function decrypt() {
      throw new CustomError('Not implemented'); // remove line with error and write your code here
    }
  }]);

  return VigenereCipheringMachine;
}();

module.exports = VigenereCipheringMachine;