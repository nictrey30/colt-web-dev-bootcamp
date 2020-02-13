let form = document.querySelector('form');
let result = document.querySelector('.result');
form.addEventListener('submit', e => {
  e.preventDefault();
  let age = parseInt(form.age.value);
  if (isNaN(age) || age < 1) {
    result.textContent = "You've entered the wrong age";
  } else if (age === 21) {
    result.textContent = "Happy 21'st bday!";
  } else if (age % 2 === 1) {
    result.textContent = 'Your age is odd';
  } else {
    result.textContent = 'Your age is even';
  }
  if (Math.sqrt(age) % 1 === 0) {
    result.innerText += ' , also a perfect square';
  }
  form.reset();
});
