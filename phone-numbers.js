/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

Rules:
  Phone number < 10 digits = invalid.
  If starts with 1 and is 11 digits total = valid, but trim 1.
  If 11 digits total but doesn't start with 1 = invalid.
  If > 11 digits = invalid.
  If invalid, return a string of 10 0s.

Explicit:
  Validate the phone number based on length and US country code.
  Parse out or ignore special characters.

Implicit:
  No alphabetical characters.

Data Structure:
  String
  Intermediate: Array

Input: String
Output: String

Algorithm:
  Parse out spaces, dashes, dots, or parentheses.
  Find length of new string.
    If > 11
      Invalid
    If < 10
      Invalid
    If 11 and doesn't start with 1
      Invalid
    If 11 and starts with 1
      Valid
      Trim 1
    If 10
      Valid
*/

function phone(phoneStr) {
  const invalidResult = "0000000000";
  const specialChars = new RegExp(/[0-9]/g);
  let parsedNum = phoneStr.match(specialChars);

  if (parsedNum.length === 10) {
    return parsedNum.join("");
  } else if (parsedNum.length === 11 && parsedNum[0] === "1") {
    return parsedNum.join("").slice(1);
  } else {
    return invalidResult;
  }
}

console.log(phone("1(123)123-1234")); // 11 starts with 1
console.log(phone("123456789101")); // more than 11
console.log(phone("2123-123.1234")); // 11 doesn't start with 1
console.log(phone("123-123-1234")); // 10
console.log(phone("123")); // less than 10
