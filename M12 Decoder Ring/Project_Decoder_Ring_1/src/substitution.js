// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // if alphabet is not 26 characters, return false
    if (!alphabet || alphabet.length !== 26) return false;
    //check if each character in the alphabet occurs more than once
    // if it occurs more tha once return false
    // change the alphabet string into an array of each letter:
    const alphabetTestArray = alphabet.split("");
    // => ["x","y"...]
    // loop through each letter in the alphabetTestArray
    for (let letter of alphabetTestArray) {
      //find the number of times the letter appears in the test array
      let letterCount = alphabetTestArray.filter(
        (character) => character === letter
      ).length;
      // if the letter occurs more than once, return false
      if (letterCount > 1) return false;
    }
    //declare variable for normal abc... alphabet
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // declare variable for substitution alphabet parameter for clarity
    const substitutionAlphabet = alphabet;
    // make input lowerCase
    input = input.toLowerCase();

    const splitArray = input.split("");
    // => ["m","e","s","s","a","g","e"...]
    const encodedArray = [];

    // DECODING SECTION:
    if (!encode) {
      //input would be gibberish which could include & special symbols
      for (let character of splitArray) {
        // of substitution alphabet DOES NOT include the character, likely a space
        if (!substitutionAlphabet.includes(character)) {
          // just push the character as it is
          encodedArray.push(character);
        } else {
          //find the index of the character in the substitution alphabet
          const foundIndex = substitutionAlphabet.indexOf(character);
          //find character in the normal alphabet at the same index
          const foundCharacter = normalAlphabet[foundIndex];
          // console.log(foundCharacter);
          // push the found character into the enodedArray
          encodedArray.push(foundCharacter);
        }
      }
    } else {
      // ENDODING SECTION:
      // inout is regular word
      // loop through each character in the splitArray
      for (let character of splitArray) {
        // if the normal alphabet DOES NOT include the character, likely a space
        if (!normalAlphabet.includes(character)) {
          //just push the character as it is
          encodedArray.push(character);
        } else {
          //find the index of the character in the normal alphabet
          const foundIndex = normalAlphabet.indexOf(character);
          //find character in the substitution alphabet at the same index
          const foundCharacter = substitutionAlphabet[foundIndex];
          // console.log(foundCharacter);
          // push the found character into the encodedArray
          encodedArray.push(foundCharacter);
        }
      }
    }
    //return the enodedArray joined as a string
    return encodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
