require('locus');

let myVar = 55;
let myObject = {
  prototype: 'Poo'
};
function runIt() {
  let result = [myObject.prototype];
  eval(locus);
  return result;
}
function getIt() {
  let result = runIt();
  // eval(locus);
  return result;
}

console.log(`Result is: ${getIt()}`);
