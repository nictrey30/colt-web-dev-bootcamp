/*
val()
text()
attr()
html()
addClass()
removeClass()
toggleClass()
*/
console.log($('h1').text());
console.log($('li').text());
$('h1').text('New Text replaced with jQuery!!');

$('ul').append('<li>Mars</li>');

// attr()
// get the value of an attribute for the first element in the set of matched elements or set or more attributes for every matche element
$('img').css('width', '200px');
$('img').attr('alt', 'a cute pine marten');
$('input').attr('placeholder', 'type ur name');
$('img:first-of-type').attr('src', 'https://i.redd.it/1bqkqhexfjt11.jpg');
$('img')
  .last()
  .attr(
    'src',
    'https://www.naturepl.com/blog/wp-content/uploads/2019/10/01392115.jpg'
  );

// val()
// extracts the value from an input
// $('input').val();
$('input').change(() => console.log($('input').val()));

$('select').val();

// Manipulating Classes
$('h1').addClass('correct');
$('h1').removeClass('correct');
$('li')
  .last()
  .addClass('wrong');
$('li')
  .first()
  .addClass('correct');
$('li').toggleClass('correct');
$('li')
  .first()
  .toggleClass('done');
