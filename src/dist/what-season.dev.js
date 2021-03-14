"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  var month = date.getMonth();
  var season = 'winter';

  if (_typeof(date) === undefined) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error();
  } else {
    if (month >= 11 && month <= 1) {
      season = 'winter';
    }

    if (month >= 2 && month <= 4) {
      season = 'spring';
    }

    if (month >= 5 && month <= 7) {
      season = 'summer';
    }

    if (month >= 8 && month <= 10) {
      season = 'fall';
    }

    return season;
  }
};