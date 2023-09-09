/*
Write a function that encrypts text with the Vigenere Cipher.

Rules:
  The Vigenere Cipher uses a series of Caesar Ciphers based on the letters of a keyword.
  Each letter in the keyword represents a key value, which is used to encrypt text.
  If the keyword is four letters long, then the four characters in the text should be encrypted based on the key values of that keyword.
  Then, the encryption repeats itself with the next four characters.
  The letters A-Z, correspond to the right-shift values, 0-25.
  The keyword is case-insensitive, however, when encrypting the text, preserve the original casing.
  Ignore punctuation when encrypting - preserve it!

Questions:
  Will the keyword always be a string?
  Is it possible for the keyword to have non-alphabetical characters?
  Will the inputs always be two strings - text and keyword?
  If the current character is not alphabetical, do I skip the current key value?

Data Structure:
  String - Input
  Array - Intermediate
  String - Output

Algorithm:
  The Key Values of the Keyword
    How do I cycle through these key values?
  Value of the Character
    Is it a letter?
    What is the casing?
  
  Initialize Array of the String
  Initialize Array of the Keyword
  Initialize Array of Key Values
  Initialize String: encryptedText
  
  Find the Key Values of the Keyword
    Iterate through the keyword array.
      Find the value based on the character of the keyword, which is associated with the alphabet.
      Add the value to the key value arrays.
  
  Encrypt the Text
    Initialize key value index to zero.
    Iterate through the string array.
      If it's a letter,
        If it's uppercase,
          Convert the current character based on the current key value.
          Uppercase the converted character.
          If current key value is > key value array length;
            Set the key value index to zero.
          Key value index += 1
          encryptedText += convertedChar
        Else,
          Convert the current character based on the current key value.
          If current key value is > key value array length;
            Set the key value index to zero.
          Key value index += 1
          encryptedText += convertedChar
      Else
        encryptedText += convertedChar
  
  Return encryptedText
*/

function vigenere(text, keyword) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedText = "";
  let keyValues = [];
  let keyIndex = 0;

  // Find Key Values
  keyword
    .toLowerCase()
    .split("")
    .forEach((char) => {
      let value = alphabet.indexOf(char);
      keyValues.push(value);
    });

  // Encrypt Text
  text.split("").forEach((char) => {
    if (/[a-z]/gi.test(char)) {
      let encryptChar;
      let charIndex = alphabet.indexOf(char.toLowerCase());
      if (char.toUpperCase() === char) {
        encryptChar = encrypt(charIndex, keyValues[keyIndex]).toUpperCase();
      } else {
        encryptChar = encrypt(charIndex, keyValues[keyIndex]);
      }

      if (keyIndex === keyValues.length - 1) {
        keyIndex = 0;
      } else {
        keyIndex += 1;
      }

      encryptedText += encryptChar;
    } else {
      encryptedText += char;
    }
  });

  return encryptedText;
}

function encrypt(charIndex, keyValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let currentPos = charIndex + keyValue;
  let truePos = currentPos % alphabet.length;
  let letter = alphabet[truePos];

  return letter;
}

console.log(vigenere("hello", "a") === "hello");
console.log(vigenere("aaa", "b") === "bbb");
console.log(vigenere("aaaa", "ba") === "baba");
console.log(vigenere("!aAAa!", "b") === "!bBBb!");
console.log(
  vigenere("Pineapples don't belong on pizza!", "A") ===
    "Pineapples don't belong on pizza!"
);
console.log(
  vigenere("Pineapples don't go on pizzas!", "cab") ===
    "Riogaqrlfu dpp't hq oo riabat!"
);
console.log(vigenere("Dog", "Rab") === "Uoh");
