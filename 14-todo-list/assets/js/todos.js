// check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('checked');
});

// click on X to delte Todo
$('ul').on('click', 'span', function(e) {
  // stop the propagation of 'click' event to bubble up to the li element
  e.stopPropagation();
  if (
    $(this)
      .parent()
      .hasClass('checked')
  ) {
    // this reffering to the span
    $(this)
      .parent()
      .fadeOut(500, function() {
        // this reffering to the li
        $(this).remove();
      });
  }
});

// adding Todos
$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) {
    // grabbing new Todo text from input
    let todoText = $(this).val();
    $(this).val('');
    // create a new li and add to ul
    $('ul').append(
      '<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>'
    );
  }
});

//  IMPORTANT
// -> click() only adds event listeners for existing elements
// -> on() will adds event listeners for all potential future elements

// we can only add event listeners in jquery only on code that exists when it's run the first time
$('.fa-plus').click(function() {
  $('input[type="text"]').fadeToggle();
});
