const rows = 10;
const cols = 10;
const matrix = new Array(rows).fill().map(() => new Array(10).fill(undefined));
const gridStartIndex = 0;
const gridEndIndex = matrix.length - 1;

const startPosition = [0, 0];
const occupiedPositions = [startPosition];

const maxMoves = 21;
const treasureCount = 5;
const trapCount = 3;

const treasureClassList = "treasure";
const trapClassList = "trap";
const playerElementId = "player";
const movesElementId = "moves";
const scoreElementId = "score";
const gridElementId = "grid";

const initMaxMovesElement = (getElementById(movesElementId).textContent =
  maxMoves);
const initScoreElement = (getElementById(scoreElementId).textContent = 0);

displayMatrix(matrix, gridElementId);
generateGameElements(
  treasureCount,
  gridStartIndex,
  gridEndIndex,
  treasureClassList
);
generateGameElements(trapCount, gridStartIndex, gridEndIndex, trapClassList);

let [xPostion, yPosition] = [0, 0];
let currentPosition = matrix[xPostion][yPosition];

addClassList(playerElementId);
function addClassList(elementId) {
  currentPosition.classList.add(elementId);
}

function removeClassList(elementId) {
  currentPosition.classList.remove(elementId);
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  return element;
}

function getTextContentById(elementId) {
  return document.getElementById(elementId).textContent;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPositionOccupied(position) {
  return occupiedPositions.some(
    (element) => element[0] === position[0] && element[1] === position[1]
  );
}

function generateGameElements(
  elementCount,
  gridStartIndex,
  gridEndIndex,
  elementClass
) {
  for (let i = 0; i < elementCount; i++) {
    let position;
    do {
      position = [
        getRandomNumber(gridStartIndex, gridEndIndex),
        getRandomNumber(gridStartIndex, gridEndIndex),
      ];
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
    if (Number(getTextContentById(movesElementId)) > 0) {
      generateUIGameMetric(movesElementId, -1);
    } else {
      alert("youre out of move");
    }
    if (isTrap(newX, newY)) {
      handleTrap();
      return;
    } else movePlayerPosition(newX, newY);
    if (isTreasure()) {
      handleTreasure();
      generateUIGameMetric(scoreElementId, 1);
    }
  }
}

function movePlayerPosition(newX, newY) {
  removeClassList(playerElementId);
  [xPostion, yPosition] = [newX, newY];

  currentPosition = matrix[xPostion][yPosition];
  addClassList(playerElementId);
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
  removeClassList(treasureClassList);
}

function updateGameMetric(elementId, changeAmount) {
  const currentMeticVal = Number(getTextContentById(elementId)) + changeAmount;
  return currentMeticVal;
}
//
function generateUIGameMetric(elementId, changeAmount) {
  const currentMeticVal = updateGameMetric(elementId, changeAmount);
  getElementById(elementId).textContent = currentMeticVal;
}

function displayMatrix(matrix, containerId) {
  const grid = getElementById(containerId);

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
