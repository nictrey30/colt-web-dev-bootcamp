let gameOver = false;
let yesBtn = document.querySelector('#yes');
let noBtn = document.querySelector('#no');
let result = document.querySelector('.result');
let steps = 0;

yesBtn.addEventListener('click', e => {
  if (gameOver === false) {
    steps++;
    result.textContent = `Congratulations. You reached destination from ${steps} steps`;
  }
  gameOver = true;
});
noBtn.addEventListener('click', e => {
  steps++;
  if (gameOver === false) result.textContent = `You made ${steps} steps`;
});
