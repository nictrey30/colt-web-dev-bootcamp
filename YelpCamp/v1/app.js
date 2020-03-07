const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// serve the contents of the 'public' folder
app.use(express.static('public'));
app.set('view engine', 'ejs');

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
  },
  {
    name: 'Salmon Creek',
    image:
      'https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
  },
  {
    name: "Mountain Goat's Rest",
    image:
      'https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
  },
  {
    name: 'Granite Hill',
    image:
      'https://pixabay.com/get/52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2c7ed59245cd51_340.jpg'
  }
];

app.get('/', function(req, res) {
  res.render('landing');
});
app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', { campgrounds: campgrounds });
});
app.get('/campgrounds/new', function(req, res) {
  res.render('new');
});

// same url, but totally different routes - follows REST
app.post('/campgrounds', function(req, res) {
  // res.send('You hit the post route');
  // get data from form and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  campgrounds.push({ name, image });
  // redirect back to campgrounds page
  res.redirect('/campgrounds');
});

app.listen(3000, () => console.log('YelpCamp Server has started!'));
