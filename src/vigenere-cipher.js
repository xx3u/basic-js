const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    }
  encrypt(text, password) {
    if (text === undefined || password === undefined) {
      throw new Error();
    }

    if (typeof(text) !== "string"){
      return;
    }
    if (typeof(password) !== "string" ){
      return ;
    }

    text = text.toLowerCase();
    password = password.match(/[a-z]/gi).join("").toLowerCase();
    let encryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < text.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % password.length;
      let passwordIndex = this.alphabet.a.indexOf(password[keyLetter]);

      if( this.alphabet[text[i]] ){
        encryptedText += this.alphabet[text[i]][passwordIndex];
      } else{
        encryptedText += text[i];
        specialCharacterCount++;
      }
    }
    return encryptedText.toUpperCase();
  }    
  decrypt(encryptedText, password) {
    if (encryptedText === undefined || password === undefined) {
      throw new Error();
    }
    if( typeof(encryptedText) !== "string" ){
      return ;
    }
    if( typeof(password) !== "string" ){
      return ;
    }

    encryptedText = encryptedText.toLowerCase();
    password = password.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < encryptedText.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % password.length;
      let keyRow = this.alphabet[password[keyLetter]];

      if( keyRow.indexOf(encryptedText[i]) !== -1 ){
        decryptedText += this.alphabet.a[keyRow.indexOf(encryptedText[i])];
      }else{
        decryptedText += encryptedText[i];
        specialCharacterCount++;
      }
    }
    return decryptedText.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
