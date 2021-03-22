"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var transformedArr = _toConsumableArray(arr);

  if (!Array.isArray(arr)) {
    throw Error();
  }

  var countCntl = transformedArr.filter(function (x) {
    return ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].indexOf(x) !== -1;
  }).length;

  for (i = 0; i < countCntl; i++) {
    transformedArr.map(function (element, index) {
      if (['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(element)) {
        if (element === '--discard-next' && index !== arr.length - 1) {
          transformedArr.splice(index, 3);
        } else if (element === '--discard-prev' && index !== 0) {
          transformedArr.splice(index - 1, 2);
        } else if (element === '--double-prev' && index !== 0) {
          transformedArr.splice(index, 1, transformedArr[index - 1]);
        } else if (element === '--double-next' && index !== arr.length - 1) {
          transformedArr.splice(index, 1, transformedArr[index + 1]);
        } else if (index === 0 || index === arr.length - 1) {
          transformedArr.splice(index, 1);
        } else {
          return transformedArr.push(element);
        }
      }
    });
  }

  return transformedArr;
};