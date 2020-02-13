let count = 0;
let myVar = setInterval(() => {
  console.log('twinkle twinkle ...');
  count++;
  if (count === 3) clearInterval(myVar);
}, 1000);
