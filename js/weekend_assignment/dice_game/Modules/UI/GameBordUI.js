const GameBordUI = () => {
  return `<section class="board-section flex justify-content align-items">
        <section class="game-board flex row">
          <section class="player1-section flex column align-items">
            <p class="flex justify-content">PLAYER 1</p>
            <p class="score-player1 score flex justify-content">0</p>
            <section class="current-section-player1 current-section">
              <p class="current flex justify-content">CURRENT</p>
              <p
                class="cuurent-score-player1 flex justify-content cuurent-score"
              >
                0
              </p>
            </section>
          </section>
          <section class="player2-section flex column align-items">
            <p class="flex justify-content">PLAYER 2</p>
            <p class="score-player2 score flex justify-content">0</p>
            <section class="current-section-player2 current-section">
              <p class="current flex justify-content">CURRENT</p>
              <p
                class="cuurent-score-player2 flex justify-content cuurent-score"
              >
                0
              </p>
            </section>
          </section>
        </section>
        <section
          class="dice-game-controls flex column justify-content align-items gap"
        >
          <button>NEW GAME</button>
          <img src="image/dice-6.png" class="img-dice1 img-dice" alt="dice1" />
          <img src="image/dice-6.png" class="img-dice2 img-dice" alt="dice1" />
          <button class="role-dice-btn">ROLE DICE</button>
          <button class="hold-btn">HOLD</button>
        </section>
      </section>`;
};
export default GameBordUI;
