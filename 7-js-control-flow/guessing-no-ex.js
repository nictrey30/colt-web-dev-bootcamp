// let randomNo = require('random-number');
//   let winningNo = randomNo({
//     min: 1,
//     max: 10,
//     integer: true
//   });
let winningNo = Math.floor(Math.random() * 10) + 1;
console.log(winningNo);
let result = document.querySelector('.result');
let form = document.querySelector('.form-inline');
let guessedNo = document.querySelector('.guessed');
let gameOver = false;
let guesses = [];
maxGuesses = 3;
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!gameOver) {
    let guess = parseInt(form.no.value);
    if (isNaN(guess)) {
      result.textContent = 'You did a wrong input!';
    } else if (guess < 1 || guess > 10) {
      result.textContent = 'A number between 1 and 10 please!';
    } else if (guesses.includes(guess)) {
      result.textContent = 'Already guessed that!';
    } else if (guess === winningNo) {
      guesses.push(guess);
      result.textContent = `Congratulations! You won in ${guesses.length} guesses`;
      gameOver = true;
    } else if (guess > winningNo) {
      result.textContent = 'Try lower!';
      guesses.push(guess);
    } else {
      result.textContent = 'Try Higher';
      guesses.push(guess);
    }
    guessedNo.innerText = '';
    guesses.forEach(el => {
      guessedNo.innerText += ` ${el} ||`;
    });
    if (guesses.length === maxGuesses) {
      result.textContent = 'Maximum Guesses Reached! Game Over!';
      gameOver = true;
    }
  }
  form.reset();
});
