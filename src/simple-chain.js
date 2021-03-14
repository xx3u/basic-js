const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    typeof value === 'undefined' ?  this.arr.push(`( )`) : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.getLength()) {
      this.arr.splice(position - 1, 1);
    }
    else {
      this.arr.splice(0, this.getLength());
      throw Error();
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.arr.join('~~').toString();
    this.arr.splice(0, this.getLength());
    return finishedChain;
  }
};

module.exports = chainMaker;
