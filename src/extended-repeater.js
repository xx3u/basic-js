const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newAr = [];
  if (options.repeatTimes === undefined) {
    newAr.push(String(str), String(options.addition))
    return newAr.join('');
  } else {
    for (i = 0; i < options.repeatTimes; i++) {
      newAr.push(String(str));
      if (options.additionRepeatTimes > 0) {
        for (y = 0; y < options.additionRepeatTimes; y++) {
          newAr.push(String(options.addition));
          options.additionSeparator ? newAr.push(options.additionSeparator) :
          newAr.push('|');
        }
        newAr.pop();
      } else if (options.addition !== undefined) {
        newAr.push(String(options.addition))
      }
      options.separator ? newAr.push(options.separator) : newAr.push('+');
    };
    newAr.pop();
    return newAr.join('');
  }
};
  