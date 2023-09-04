// 1)
/*
function sum(number) {
  let numberString = String(number).split("");
  let total = numberString.reduce(
    (acc, currentVal) => Number(acc) + Number(currentVal),
    0
  );
  return total;
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
*/

// 2)
/*
function wordSort(num1, num2) {
  const NUMBER_WORDS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/

// 3)
/*
function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach((number1) => {
    array2.forEach((number2) => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
*/

// 4)
