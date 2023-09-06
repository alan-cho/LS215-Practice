/*
Definition:
  Luhn Formula 
    Checksum formula to validate ID numbers.
    Verifies a number against its included check digit.
    The entire number is a partial number and the check digit.
    To be validated:
      Counting from most right digit and moving left, double the value of every second digit.
      For any digit that becomes 10 or more, subtract 9 from the result.
      Add all the digits together to obtain its checksum.

Rules:
  If the checksum ends in 0, then it's valid.
  Otherwise, it's invalid.

Write a program, given a number in string format, to check if it's valid according to Luhn's.
Ignore all non-numeric characters in the input string.

Explicit:
  Input: String - represents a number.
  Output: Boolean - validity.
  Ignore non-numeric characters.
  Start from the right, and double every other number.
  If it goes over 10, subtract 9.
  Add up all the numbers.
  Checksum determines validity.

Data Structure:
  String
  Intermediate - Array
  Boolean

Algo:
  Parse out non-numerics.
  Convert into array.
  Map to number data type.
    If odd length, double even indices.
    If even length, double odd indices.
  Add total.
  Modulo by 10, if result === 0, return true.
  Else false.
*/

function validateLuhn(numberStr) {
  let parsedNums = numberStr.match(/\d/g).map(Number);
  let index = 0;
  if (parsedNums.length % 2 !== 0) {
    index = 1;
  }

  for (index; index < parsedNums.length; index += 2) {
    parsedNums[index] = parsedNums[index] * 2;
    if (parsedNums[index] >= 10) {
      parsedNums[index] -= 9;
    }
  }

  let total = parsedNums.reduce((acc, current) => acc + current, 0);
  if (total % 10 === 0) {
    return true;
  }

  return false;
}

console.log(validateLuhn("2323 2005 7766 3554")); // True
console.log(validateLuhn("2323 2005 7766.3554")); // True
console.log(validateLuhn("2323 2005 7766.3555")); // False
console.log(validateLuhn("1111")); // False
console.log(validateLuhn("8763")); // True
