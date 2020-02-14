let list = [];
let results = document.querySelector('.results');
window.setTimeout(function() {
  let input = prompt('What would you like to do?');
  while (input !== 'quit') {
    if (input === 'list') {
      if (list.length === 0) {
        results.textContent = 'Nothing on the list';
      } else {
        console.log('**********');
        list.forEach((el, index) => {
          console.log(`${index}: ${el}`);
        });
      }
      console.log('**********');
    } else if (input === 'new') {
      let newItem = prompt('Add new item: ');
      list.push(newItem);
      console.log(`${newItem} added to the list`);
    } else if (input === 'delete') {
      let index = prompt('Enter index of todo to delete');
      while (index < 0 || index > list.length) {
        index = prompt('Enter index of todo to delete');
      }
      console.log('deleted: ', list.splice(index, 1));
    }
    input = prompt('What would you like to do?');
  }
  alert('OK, You quit the app!');
}, 500);
