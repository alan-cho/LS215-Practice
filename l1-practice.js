// 1) Total Square Area
/*
Rectangles are represented as arrays: two elements represent height and width.
*/
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
