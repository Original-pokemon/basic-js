const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chainMaker.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > chainMaker.chain.length
    ) {
      chainMaker.chain = [];
      throw new Error();
    }

    chainMaker.chain[position - 1] = undefined;

    const filterChain = chainMaker.chain.filter((e) => {
      return e !== undefined;
    });

    chainMaker.chain = filterChain;

    return chainMaker;
  },
  reverseChain() {
    chainMaker.chain = chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const filterChain = chainMaker.chain.filter(function (x) {
      return x !== undefined;
    });

    let res = "";
    filterChain.forEach((e) => {
      res += `( ${e} )~~`;
    });
    chainMaker.chain = [];
    return res.slice(0, -2);
  },
};

module.exports = chainMaker;
