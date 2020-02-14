// write a function printReverse() that takes an array as an argument and prints its elements in reverse order(dont reverse the array!)

const printReverse = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
};
// printReverse(['a', 'b', 'c']);
// printReverse([1, 2, 3, 4]);

// write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
const isUniform = array => {
  let uniform = true;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] !== array[i + 1]) {
      uniform = false;
      break;
    }
  }
  return uniform;
};
// console.log(isUniform([1, 1, 1, 1]));
// console.log(isUniform([2, 1, 1, 1]));
// console.log(isUniform(['a', 'b', 'p']));
// console.log(isUniform(['b', 'b', 'b']));

const sumArray = array => {
  let sum = 0;
  array.forEach(el => (sum += el));
  return sum;
};
console.log(sumArray([-5, 100]));

// write a function max() that takes an array of nums and returns the maximum number in the array
const max = array => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
};
console.log(max([10, 2, 11, 4]));
