/*
Write a function that displays a four-pointed diamond in an n x n grid.
n is an odd integer supplied as the argument.

Implicit:
  The odd integer is the number of rows the diamond will have.
  The most middle row of the diamond will be the length of the argument.

Data Structure:
  String

Algorithm:
  Create Top Half
    For Loop: (i = 1; i < n; i += 2)
      String = *.repeat(i)
      Log String \n
  Create Middle Row
    String = *.repeat(n)
    Log String \n
  Create Bottom Half
    For Loop: (i = n; i > 1; i -= 2)
      String = *.repeat(i)
      Log String \n
*/

function diamond(n) {
  for (let i = 1; i < n; i += 2) {
    let spacing = (n - i) / 2;
    let row = " ".repeat(spacing) + "*".repeat(i) + " ".repeat(spacing);
    console.log(row);
  }
  let middleRow = "*".repeat(n);
  console.log(middleRow);
  for (let j = n - 2; j >= 1; j -= 2) {
    let spacing = (n - j) / 2;
    let row = " ".repeat(spacing) + "*".repeat(j) + " ".repeat(spacing);
    console.log(row);
  }
}

diamond(1);
diamond(3);
diamond(9);
