let firstName = 'Ene';
let lastName = 'George';
let age = parseInt('24');
if (age !== NaN) {
  console.log(
    `Your full name is ${firstName} ${lastName}, and you are ${age} years old.`
  );
} else {
  console.log('Input a number!');
}
