// 1) Total Square Area
/*
Rectangles are represented as arrays: two elements represent height and width.
function totalArea(rectangles) {
  let allAreas = rectangles.map((rectangle) =>
    calculateRectangleArea(rectangle[0], rectangle[1])
  );
  let totalArea = allAreas.reduce(
    (currentTotal, currentArea) => currentTotal + currentArea,
    0
  );

  return totalArea;
}

function calculateRectangleArea(height, width) {
  let area = height * width;
  return area;
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter((rectangle) => rectangle[0] === rectangle[1]);
  let allSquareAreas = squares.map((square) =>
    calculateRectangleArea(square[0], square[1])
  );
  let totalSquareArea = allSquareAreas.reduce(
    (currentTotal, currentArea) => currentTotal + currentArea,
    0
  );

  return totalSquareArea;
}

let rectangles = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];
*/

// 2) Processing Releases
/*
Write a function that processes the movie data.
The function must return an array of objects that contain the ID and Title key-value pairs.
function processReleaseData(data) {
  return data
    .filter((movie) => {
      if (movie.title && movie.id) {
        return true;
      }
      return false;
    })
    .map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
      };
    });
}

let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];
*/

// 3) Octal
/*
Write a function that peforms octal to decimal conversion.
Given a string that represents an octal number, return a decimal representation of that same value.
*/

function octalToDecimal(numberString) {
  let decimalParts = numberString.split("").map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce((sum, number) => sum + number);
}

octalToDecimal("1"); // 1
octalToDecimal("10"); // 8
octalToDecimal("130"); // 88
octalToDecimal("17"); // 15
octalToDecimal("2047"); // 1063
octalToDecimal("011"); // 9
