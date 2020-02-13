// write a function isEven, returns true or false if num is even
const isEven = num => num % 2 === 0;

// write a function factorial that takes an argument and returns the factorial of it
const factorial = num => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
// console.log(factorial(10));

// write a function kebabToSnake() which takes a single kebab-case string argument and returns the snake_cased version
const kebabToSnake = string => string.replace(/-/g, '_');
console.log(kebabToSnake('dogs-are-awesome'));
