const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month = date.getMonth();
  let season = 'winter';
  if (typeof date === undefined ) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error();
  } 
  else {
    if ( month >= 11 && month <= 1 ) 
      { season = 'winter';}
    if ( month >= 2 && month <= 4 )
      {season = 'spring';}
    if (month >= 5 && month <= 7)
      {season = 'summer';}
    if (month >= 8 && month <= 10)
      {season = 'fall';}
    return season;
  }
};
