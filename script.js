const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const rollBtn1 = document.getElementById('rollBtn1');
const rollBtn2 = document.getElementById('rollBtn2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const winner = document.getElementById('winner');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = Math.random() < 0.5? 'player1' : 'player2';
let currentPlayerScore = 0;
let gameIsActive = true;

const switchPlayer = () => {
  currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
  currentPlayerScore = 0;
  rollBtn1.disabled = currentPlayer === 'player2';
  rollBtn2.disabled = currentPlayer === 'player1';
};

const checkWinner = () => {
  if (parseInt(score1.textContent) >= 5) {
    winner.textContent = 'Player 1 wins!';
    gameIsActive = false;
  } else if (parseInt(score2.textContent) >= 5) {
    winner.textContent = 'Player 2 wins!';
    gameIsActive = false;
  }
};

const rollDice = () => {
  if (!gameIsActive) return;

  const roll = Math.floor(Math.random() * 6) + 1;
  currentPlayerScore += roll;

  if (currentPlayer === 'player1') {
    score1.textContent = currentPlayerScore;
  } else {
    score2.textContent = currentPlayerScore;
  }

  checkWinner();
  if (gameIsActive) {
    switchPlayer();
  } else {
    rollBtn1.disabled = true;
    rollBtn2.disabled = true;
    resetBtn.disabled = false;
  }
};

resetBtn.addEventListener('click', () => {
  currentPlayer = Math.random() < 0.5? 'player1' : 'player2';
  currentPlayerScore = 0;
  gameIsActive = true;
  score1.textContent = '0';
  score2.textContent = '0';
  winner.textContent = '';
  rollBtn1.disabled = currentPlayer === 'player2';
  rollBtn2.disabled = currentPlayer === 'player1';
  resetBtn.disabled = true;
});

rollBtn1.addEventListener('click', rollDice);
rollBtn2.addEventListener('click', rollDice);

