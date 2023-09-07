/*
Write a function that implements the Caesar Cipher.

Rules:
  Given a string, and a 'key' (integer).
  Create the encrypted message.
  The encryption is shifting the letters to the right by the key value.

Implicit:
  Case-sensitive = The original case of the character stays consistent.
  If the key goes over the alphabet cycle, start from the beginning.
  Ignore punctuation or non-letters.

Algorithm:
  1. How to cycle through the alphabet?
  2. How to check if the character is a letter?
  3. How to check what case the character is?
  Initialize encrypted string.
  Initialize an alphabet array.
  Split the string into an array.
    Iterate through the string-array.
      If it's a letter,
        If it's uppercase,
          Find the appropriate encrypted character and capitalize it.
        Else,
          Find the appropriate encrypted character.
      Else,
        Continue
      Add the character to the encrypted string.
*/

function caesarEncrypt(text, key) {
  let encryption = "";
  let textArr = text.split("");

  textArr.forEach((char) => {
    //Check if character is a letter.
    if (/[a-z]/gi.test(char)) {
      let letter;
      //Check if it's capitalized.
      if (char === char.toUpperCase()) {
        letter = findEncryptLetter(char, key).toUpperCase();
      } else {
        letter = findEncryptLetter(char, key);
      }
      encryption += letter;
    } else {
      encryption += char;
    }
  });

  console.log(encryption);
}

function findEncryptLetter(char, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(char.toLowerCase());
  let totalPos = index + key;
  let truePos = totalPos % alphabet.length;
  let letter = alphabet[truePos];
  return letter;
}

// simple shift
caesarEncrypt("A", 0); // "A"
caesarEncrypt("A", 3); // "D"

// wrap around
caesarEncrypt("y", 5); // "d"
caesarEncrypt("a", 47); // "v"

// all letters
caesarEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt("The quick brown fox jumps over the lazy dog!", 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt(
  "There are, as you can see, many punctuations. Right?; Wrong?",
  2
);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
