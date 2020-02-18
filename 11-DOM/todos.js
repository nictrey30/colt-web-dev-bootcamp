let ul = document.querySelector('ul');
ul.addEventListener('mouseover', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.add('text-secondary');
  }
});
ul.addEventListener('mouseout', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.remove('text-secondary');
  }
});
ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('strikeThrough');
  }
});
