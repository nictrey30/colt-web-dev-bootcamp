// on() works similarly to addEventListener. It lets you specify the type of event to listen for.
$('h1')
  .first()
  .on('click', function() {
    $(this).toggleClass('green');
  });
$('button').on('mouseover', function() {
  $(this).css('color', 'crimson');
});
$('button').on('mouseout', function() {
  $(this).css('color', 'black');
});

// diff between click() and on()
// click() only adds listeners for existing elements
// on() will add listeners for all potential future elements
