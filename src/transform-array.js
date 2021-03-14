const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArr = [...arr];
  if (!Array.isArray(arr)) {
    throw Error(); 
  } else {
    let countCntl = transformedArr.filter(x => ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].indexOf(x) !== -1).length;
    for (i = 0; i < countCntl; i++) {
      transformedArr.map((element, index) => {
        if ( ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(element)) {
          if (element === '--discard-next' && index !== (arr.length - 1)) { 
            transformedArr.splice(index, 3);
          } else if (element === '--discard-prev' && index !== 0) {
            transformedArr.splice(index - 1, 2);
          } else if (element === '--double-prev' && index !== 0) {
            transformedArr.splice(index, 1, transformedArr[index - 1]);
          } else if (element === '--double-next' && index !== (arr.length - 1)) {
            transformedArr.splice(index, 1, transformedArr[index + 1]);
          } else {
            transformedArr.splice(index, 1);
          }
        }
      })
      
    }

  }
  return transformedArr;
} 
 