const myForEach = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
};
let colors = ['red', 'orange', 'yellow', 'green'];
myForEach(colors, el => console.log(el));
