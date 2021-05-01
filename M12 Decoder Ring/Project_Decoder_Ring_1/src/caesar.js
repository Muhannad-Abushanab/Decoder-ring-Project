// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // what if they put numbers, booleans. null?
    if (typeof input !== "string" || input.length === 0) {
      return false;
    }
    // check if shift value is in proper range 
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    // your solution code here
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz";
    // splitting input into an array to loop through

    // make new array to return results to be pushed to
    // ring theory

    if (!encode) { 
      //shiftValue = shift + -1;
     alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("").reverse().join("")
    }
     const inputArray = input.toLowerCase().split('')
     const newArray = []

    for (let character of inputArray) {
      if (alphabetArray.includes(character)) {
        
        // shifting it matches alphabet
        // character = z (in zebra magazine)
        const characterIndex = alphabetArray.indexOf(character);
        // charindex = 
        let newIndex = (characterIndex + shift);
        if (newIndex >= 0) {
          newIndex = newIndex % 26;
        } else newIndex = newIndex + 26
          
          // if new index goes past beginning of the alphabet
          const shiftedCharacter = alphabetArray[newIndex];
          newArray.push(shiftedCharacter);
        } else newArray.push(character)
      }

    return newArray.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
