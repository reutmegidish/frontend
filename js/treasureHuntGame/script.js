const rows = 10;
const cols = 10;
const matrix = new Array(rows).fill().map(() => new Array(10).fill(undefined));

const startPotion = [0, 0];
const occupiedPositions = [startPotion];
const numOfMove = 21;

const treasureClassList = "treasure";
const trapClassList = "trap";
const playerClassList = "player";
const movesClassList = "moves";

const movesElement = () => {
  const moves = document.getElementById(movesClassList);
  return moves;
};

const initMovesElement = (movesElement().textContent = numOfMove);

const movesSelectorValue = () => {
  return document.getElementById("moves").textContent;
};

displayMatrix(matrix);
generatePotions(5, 0, matrix.length - 1, treasureClassList);
generatePotions(3, 0, matrix.length - 1, trapClassList);

let [xPostion, yPosition] = [0, 0];
let currentPosition = matrix[xPostion][yPosition];

addPlayerClassList();
// NEED TO CHECK THIS FUNCTION
function addPlayerClassList() {
  currentPosition.classList.toggle(playerClassList);
}

function displayMatrix(matrix) {
  const grid = document.getElementById("grid");

  matrix.forEach((col, colIndex) => {
    const column = document.createElement("div");
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
    matrix[row][col].classList.add(elementClass);
  }
}

function movePlayer(direction) {
  const directions = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };

  const newX = directions[direction][0] + xPostion;
  const newY = directions[direction][1] + yPosition;

  if (isMoveAlowed(newX, newY)) {
    if (movesElement().textContent > 0) generateUIMovesLeft();
    else {
      alert("youre out of move");
    }
    if (isTrap(newX, newY)) {
      handleTrap();
      return;
    } else movePlayerPosition(newX, newY);
    if (isTreasure()) {
      handleTreasure();
    }
  }
}

function movePlayerPosition(newX, newY) {
  currentPosition.classList.remove(playerClassList);
  [xPostion, yPosition] = [newX, newY];

  currentPosition = matrix[xPostion][yPosition];
  currentPosition.classList.add(playerClassList);
}

function isMoveAlowed(newX, newY) {
  return newX >= 0 && newX < cols && newY >= 0 && newY < rows;
}

function isTrap(newX, newY) {
  return matrix[newX][newY].classList.contains(trapClassList);
}

function isTreasure() {
  return currentPosition.classList.contains(treasureClassList);
}

function handleTrap() {
  alert("it's a trap!");
}

function handleTreasure() {
  currentPosition.classList.remove(treasureClassList);
}

function decreasesMovesLeft() {
  const movesLeft = Number(movesSelectorValue()) - 1;
  return movesLeft;
}

function generateUIMovesLeft() {
  const movesLeft = decreasesMovesLeft();
  movesElement().textContent = movesLeft;
}
