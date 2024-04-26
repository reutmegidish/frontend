const grid = {
  state: {
    rows: 10,
    cols: 10,
    matrix: new Array(10).fill().map(() => new Array(10).fill(undefined)),
    startPotion: [0, 0],
    xPosition: 0,
    yPosition: 0,
    currentPosition: [0, 0],
  },
  selectors: {
    grid: () => {
      return document.getElementById("grid");
    },
  },
  template() {
    return this.displayMatrix();
  },
  initialize() {
    this.displayMatrix();
    this.generatePotions(5, 0, this.state.rows - 1, "treasure");
    this.generatePotions(3, 0, this.state.rows - 1, "trap");
  },
  generatePotions(num, min, max, elementClass) {
    const { rows, cols, matrix } = this.state;
    const occupiedPositions = this.state.occupiedPositions;

    for (let i = 0; i < num; i++) {
      let position;
      do {
        position = [
          this.getRandomNumber(min, max),
          this.getRandomNumber(min, max),
        ];
      } while (this.isPositionOccupied(position));
      occupiedPositions.push(position);

      const [row, col] = position;
      matrix[row][col].classList.add(elementClass);
    }
  },
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  displayMatrix() {
    const { rows, cols, matrix } = this.state;
    const grid = this.selectors.grid();
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
  },
  isPositionOccupied(position) {
    return this.state.occupiedPositions.some(
      (element) => element[0] === position[0] && element[1] === position[1]
    );
  },

  moveAllowed(newXPosition, newYPosition) {
    const { rows, cols } = this.state;
    return (
      newXPosition >= 0 &&
      newXPosition < cols &&
      newYPosition >= 0 &&
      newYPosition < rows
    );
  },
  movePlayer(direction) {
    const directions = {
      up: [-1, 0],
      right: [0, 1],
      down: [1, 0],
      left: [0, -1],
    };

    const { xPosition, yPosition, matrix } = this.state;
    const [dx, dy] = directions[direction];
    const newXPosition = xPosition + dx;
    const newYPosition = yPosition + dy;

    if (this.moveAllowed(newXPosition, newYPosition)) {
      const currentPosition = matrix[xPosition][yPosition];
      currentPosition.classList.remove("player");

      this.state.xPosition = newXPosition;
      this.state.yPosition = newYPosition;

      const newCell = matrix[newXPosition][newYPosition];
      newCell.classList.add("player");
    }
  },
};

grid.initialize();
