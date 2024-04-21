function movePlayer(matrix, positin, dirction) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++)
      if (i === positin[0].i && j === positin[0].j) {
        let newPositin;

        switch (dirction) {
          case "up":
            newPositin = [i - 1, j];
            break;
          case "down":
            newPositin = [i + 1, j];
            break;
        }
        console.log(newPositin);
        break;
      }
  }
}

movePlayer(
  [
    [0, 2, 0],
    [1, 3, 0],
    [0, 2, 0],
  ],
  [{ i: 1, j: 1 }],
  "down"
);
