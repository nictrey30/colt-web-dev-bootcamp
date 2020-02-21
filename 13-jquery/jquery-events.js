// click()
// keypress()
// on()
$('h1')
  .first()
  .click(() => {
    alert('h1 clicked');
  });
$('button').click(function() {
  // console.log($(this)[0]);
  $(this).toggleClass('pink'); // refer to the element that was clicked
  console.log(`You clicked ${$(this).text()}`);
});

// consle.log every time a key is pressed on the input
$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) console.log($(this).val());
});

// on() works similarly to addEventListener. It lets you specify the type of event to listen for.
