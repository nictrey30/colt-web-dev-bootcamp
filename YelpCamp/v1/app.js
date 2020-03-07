const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});
app.get('/campgrounds', function(req, res) {
  let campgrounds = [
    {
      name: 'Salmon Creek',
      image:
        'https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
    },
    {
      name: 'Granite Hill',
      image:
        'https://pixabay.com/get/52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
    },
    {
      name: "Mountain Goat's Rest",
      image:
        'https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
    }
  ];
  res.render('campgrounds', { campgrounds: campgrounds });
});
app.listen(3000, () => console.log('YelpCamp Server has started!'));
