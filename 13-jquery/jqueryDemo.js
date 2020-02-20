let styles = {
  color: 'red',
  // 'background-color': 'pink',
  backgroundColor: 'pink',
  border: '2px solid red'
};
$('h1').css(styles);

// make all the li blue
$('li').css('color', 'blue');
$('li').css({
  fontSize: '20px',
  border: '1px dashed purple',
  backgroundColor: 'rgba(89, 45, 20, 0.5)'
});
