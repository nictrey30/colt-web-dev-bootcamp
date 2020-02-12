let ageInput = document.querySelector('#age');
let result = document.querySelector('.result');
let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (isNaN(parseInt(ageInput.value))) {
    result.textContent = `${form.age.value} is not a valid number!`;
  } else {
    result.textContent = `Your age is ${form.age.value} years old.`;
  }
  form.reset();
});
