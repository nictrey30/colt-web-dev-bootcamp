let fieldset = document.querySelector('fieldset');
let form = document.querySelector('.form-inline');
let player1Score = document.querySelector('#player1-score');
let player2Score = document.querySelector('#player2-score');
let player1Btn = document.querySelector('#player1-btn');
let player2Btn = document.querySelector('#player2-btn');
let resetBtn = document.querySelector('.reset');
let noGames = document.querySelector('#noGames');
let gameOver = false;

p1Score = 0;
p2Score = 0;
let winningScore = 5;

player1Btn.addEventListener('click', () => {
  fieldset.setAttribute('disabled', 'disabled');
  if (!gameOver && p1Score <= winningScore) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      player1Score.classList.add('text-success');
    }
    player1Score.textContent = p1Score;
  }
});
player2Btn.addEventListener('click', () => {
  fieldset.setAttribute('disabled', 'disabled');
  if (!gameOver && p2Score <= winningScore) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      player2Score.classList.add('text-success');
    }
    player2Score.textContent = p2Score;
  }
});
resetBtn.addEventListener('click', () => {
  if (gameOver) {
    if (fieldset.getAttribute('disabled') === 'disabled') {
      fieldset.removeAttribute('disabled');
    }
  }
  player1Score.classList.remove('text-success');
  player2Score.classList.remove('text-success');
  p1Score = 0;
  p2Score = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  gameOver = false;
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!fieldset.getAttribute('disabled')) {
    winningScore = parseInt(form.noGamesInput.value);
    fieldset.setAttribute('disabled', 'disabled');
    noGames.textContent = winningScore;
  }
  form.reset();
});
