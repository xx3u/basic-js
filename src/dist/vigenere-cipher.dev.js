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
    value: function encrypt(input, key) {
      var output = "";

      for (var i = 0, j = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);

        if (isUppercase(c)) {
          output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
          j++;
        } else if (isLowercase(c)) {
          output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
          j++;
        } else {
          output += input.charAt(i);
        }
      }

      return output;
    }
  }, {
    key: "decrypt",
    value: function (_decrypt) {
      function decrypt(_x, _x2) {
        return _decrypt.apply(this, arguments);
      }

      decrypt.toString = function () {
        return _decrypt.toString();
      };

      return decrypt;
    }(function (text, key) {
      var keyStr = key;

      if (keyStr.length == 0) {
        return;
      }

      var keyArray = filterKey(keyStr);

      if (keyArray.length == 0) {
        return;
      }

      if (decrypt()) {
        for (var i = 0; i < keyArray.length; i++) {
          keyArray[i] = (26 - keyArray[i]) % 26;
        }
      }

      var textElem = text;
      textElem.value = crypt(textElem.value, keyArray);
    })
  }]);

  return VigenereCipheringMachine;
}();

module.exports = VigenereCipheringMachine;