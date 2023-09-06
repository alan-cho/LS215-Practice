// 1)
/*
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true
*/

// 2)
/*
function removeVowels(array) {
  let newArray = array.map((word) => word.replace(/[aeiou]/gi, ""));
  console.log(newArray);
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
*/

// 3)
/*
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  console.log({
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  });
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
*/

// 4)
