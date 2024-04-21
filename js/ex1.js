function movePlayer(matrix, position, direction) {
  const dirctions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  //  need to add condition if he out side the matrix
  const directionValues = dirctions[direction];
  const [newy, newX] = directionValues;
  const currentY = position[0].y;
  const currentX = position[0].x;

  //   const newPosition = [currentY + newy, currentX + newX];
  //   console.log(newPosition);

  const [newPositionX, newPositionY] = [currentY + newy, currentX + newX];

  matrix[currentY][currentX] = "x";
  matrix.forEach((subArray) => {
    console.log(subArray.join(", "));
  });

  console.log("--------");

  matrix[currentY][currentX] = 0;
  matrix[newPositionX][newPositionY] = "x";
  matrix.forEach((subArray) => {
    console.log(subArray.join(", "));
  });
}

movePlayer(
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [{ x: 1, y: 1 }],
  "right"
);

// movePlayer(
//   [
//     [0, 2, 0],
//     [1, 3, 0],
//     [0, 2, 0],
//   ],
//   [{ x: 1, y: 1 }],
//   "up"
// );
//
//
//
// Output: {i: 1, j: 0}

// Input:
// [
//   [0, 2, 0],
//   [1, 3, 0],
//   [0, 2, 0],
// ],
//   { x: 1, y: 1 },
//   "north";
