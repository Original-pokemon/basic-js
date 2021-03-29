const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keyStr = key.toUpperCase();

    const messageLength = message.length;
    keyStr = keyStr.repeat(Math.ceil(messageLength / key.length)).split("");

    let res = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        res += String.fromCharCode(
          ((message.charCodeAt(i) + keyStr[0].charCodeAt(0)) % 26) + 65
        );
        keyStr.shift();
      } else {
        res += message.charAt(i);
      }
    }

    if (this.type === false) {
      return res.split("").reverse().join("");
    }
    return res;
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    let keyStr = key.toUpperCase();

    const messageLength = message.length;
    keyStr = keyStr.repeat(Math.ceil(messageLength / key.length)).split("");

    let res = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        res += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - keyStr[0].charCodeAt(0)) % 26) + 65
        );
        keyStr.shift();
      } else {
        res += message.charAt(i);
      }
    }

    if (this.type === false) {
      return res.split("").reverse().join("");
    }
    return res;
  }
}

module.exports = VigenereCipheringMachine;
