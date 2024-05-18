import GameBordUI from "./Modules/UI/GameBordUI.js";

const App = {
  state: {
    currentPlayer: 1,
    totalScore: 0,
    currentScore: 0, // need to update by player
  },

  selectors: {
    app: () => document.getElementById("app"),
    dice: () => document.querySelectorAll(".img-dice"),
    currentScore: (currentPlayer) =>
      document.querySelector(`.cuurent-score-player${currentPlayer}`),
    totalScore: (currentPlayer) =>
      document.querySelector(`.score-player${currentPlayer}`),
    holdBtn: () => document.querySelector(".hold-btn"),
    rolleDice: () => document.querySelector(".role-dice-btn"),
  },

  template() {
    return GameBordUI();
  },

  initialize() {
    this.selectors.app().innerHTML = this.template();
    this.createEventListeners();
  },

  createEventListeners() {
    const rolleDice = this.selectors.rolleDice();

    rolleDice?.addEventListener("click", (event) => {
      event.preventDefault();
      this.roleDiceBtn();
      //   console.log("rolle dice cliked");
    });

    const holdBtn = this.selectors.holdBtn();
    holdBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      this.holdBtn();
    });
  },

  holdBtn() {
    // need to add target score for win
    const currentPlayer = this.state.currentPlayer;
    const totalScoreSelector = this.selectors.totalScore(currentPlayer);
    const currentScoreSelrctor = this.selectors.currentScore(currentPlayer);

    const totalScore = Number(totalScoreSelector.textContent);
    const currentScore = Number(currentScoreSelrctor.textContent);

    const currentTotalScore = this.calculateScore(totalScore, currentScore);
    this.updateScoreUI(totalScoreSelector, currentTotalScore);

    this.selectors.currentScore(currentPlayer).textContent = 0;
    this.updateCurrentPlayer();
  },

  updateCurrentPlayer() {
    const currentPlayer = this.state.currentPlayer;
    if (currentPlayer) {
      if (currentPlayer === 1) {
        this.state.currentPlayer = 2;
      }
      if (currentPlayer === 2) {
        this.state.currentPlayer = 1;
      }
    }
  },

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getdDiceNum() {
    const firstNum = this.getRandomNum(1, 6);
    const secondNum = this.getRandomNum(1, 6);
    return [firstNum, secondNum];
  },

  updateDiceUI(diceArr) {
    const diceImg = this.selectors.dice();

    diceImg.forEach((dice, index) => {
      const currentDice = diceArr[index];
      dice.src = `image/dice-${currentDice}.png`;
    });
  },

  sumDice(diceNumArr) {
    return diceNumArr[0] + diceNumArr[1];
  },

  calculateScore(sumDice, currentScore) {
    return sumDice + currentScore;
  },

  updateScoreUI(selector, score) {
    selector.textContent = score;
  },

  roleDiceBtn() {
    // TODO: change and save the state for new game + use state instead selector
    const diceNumArr = this.getdDiceNum();
    const currentPlayer = this.state.currentPlayer;
    const currentScoreSelrctor = this.selectors.currentScore(currentPlayer);
    const currentScore = Number(currentScoreSelrctor.textContent);

    if (diceNumArr) {
      this.updateDiceUI(diceNumArr);
      const sumDice = this.sumDice(diceNumArr);
      const totalScore = this.calculateScore(sumDice, currentScore);
      this.updateScoreUI(currentScoreSelrctor, totalScore);
    }
  },
};
App.initialize();
// console.log(app.roleDice());
// app.updateDiceUI([4, 3]);
// app.roleDiceBtn();
// app.calculateScore([1, 5]);
