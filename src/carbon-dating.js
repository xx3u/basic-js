const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return (typeof sampleActivity === 'string' && (/^\d+\.\d+$/.test(sampleActivity) || /^\d+$/.test(sampleActivity)) && ( sampleActivity.replaceAll(/'/g, '') <= 15 && sampleActivity.replaceAll(/'/g, '') > 0)) 
  ? Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity.replaceAll(/\"/g, "")) / (0.693 / HALF_LIFE_PERIOD)) : false
};
