/*
Collection of spelling blocks, which contain two letters per block, are as shown:
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M
You can only use each block once, and you cannot use both letters from any given block.
Write a function that takes a word argument and returns true if it can be spelled.
Case-insensitive.

Explicit:
  Can't use a block more than once.
  Can't use both letters from a block.
  Case-insensitive.
  Given a string, output a boolean.

Implicit:
  Punctuation? 
  Numbers?

Data Structure:
  String
  Intermediate - Array/Object
  Boolean

Algorithm:
  Parse out any non-alpha characters.
  Iterate through the string.
    Find spelling block that correlates with current value.
      If false, set to true (object value).
      If true, return false.
  Return true.
*/

function blocks(word) {
  let letterBlocks = {
    "B:O": false,
    "X:K": false,
    "D:Q": false,
    "C:P": false,
    "N:A": false,
    "G:T": false,
    "R:E": false,
    "F:S": false,
    "J:W": false,
    "H:U": false,
    "V:I": false,
    "L:Y": false,
    "Z:M": false,
  };
  let letterKeys = Object.keys(letterBlocks);
  let parsedWord = word.toUpperCase().match(/[a-z]/gi);

  return parsedWord.every((char) => {
    let index;
    for (let i = 0; i < letterKeys.length; i += 1) {
      if (letterKeys[i].includes(char)) {
        index = i;
        break;
      }
    }
    if (letterBlocks[index]) {
      return false;
    } else {
      letterBlocks[index] = true;
      return true;
    }
  });
}

console.log(blocks("batch")); // True
console.log(blocks("BUTCH")); // False
console.log(blocks("jest")); // True
