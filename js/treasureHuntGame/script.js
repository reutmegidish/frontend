const rows = 10;
const cols = 10;
const matrix = new Array(rows).fill().map(() => new Array(10).fill(undefined));

const startPotion = [0, 0];

const occupiedPositions = [startPotion];

displayMatrix(matrix);

generatePotions(5, 0, matrix.length - 1, "treasure");
generatePotions(3, 0, matrix.length - 1, "trap");

function displayMatrix(matrix) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  matrix.forEach((col, colIndex) => {
    const column = document.createElement("div");
    column.classList.add("mm");
    col.forEach((row, rowIndex) => {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      column.appendChild(cell);
      matrix[rowIndex][colIndex] = cell;
    });
    grid.appendChild(column);
  });
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPositionOccupied(position) {
  return occupiedPositions.some(
    (element) => element[0] === position[0] && element[1] === position[1]
  );
}

function generatePotions(num, min, max, elementClass) {
  for (let i = 0; i < num; i++) {
    let position;
    do {
      position = [getRandomNumber(min, max), getRandomNumber(min, max)];
    } while (isPositionOccupied(position));
    occupiedPositions.push(position);

    const [row, col] = position;
    console.log("ppp", position);
    matrix[row] && matrix[row][col]
      ? matrix[row][col].classList.add(elementClass)
      : matrix[row][col].classList.remove(elementClass);
  }
}

let [xPostion, yPosition] = [0, 0];
let currentPosition = matrix[xPostion][yPosition];
currentPosition.classList.add("player");

function movePlayer(direction) {
  let newXPosition = 0;
  let newYPosition = 0;

  const directions = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };

  newXPosition = directions[direction][0] + xPostion;
  newYPosition = directions[direction][1] + yPosition;

  if (moveAlowed(newXPosition, newYPosition)) {
    currentPosition.classList.remove("player");
    [xPostion, yPosition] = [newXPosition, newYPosition];

    currentPosition = matrix[xPostion][yPosition];
    console.log("mmm", currentPosition);
    currentPosition.classList.add("player");
    console.log(newXPosition);
  }
}

function moveAlowed(newXPosition, newYPosition) {
  return (
    newXPosition >= 0 &&
    newXPosition < cols &&
    newYPosition >= 0 &&
    newYPosition < rows
  );
}
