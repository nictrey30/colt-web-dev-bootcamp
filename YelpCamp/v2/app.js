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
      'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'
  },
  {
    name: 'Granite Hill',
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'
  },
  {
    name: "Mountain Goat's Rest",
    image:
      'https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg'
  },
  {
    name: 'Salmon Creek',
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg'
  },
  {
    name: "Mountain Goat's Rest",
    image:
      'https://cdn.pixabay.com/photo/2016/11/29/09/09/abstract-1868624_960_720.jpg'
  },
  {
    name: 'Granite Hill',
    image:
      'https://pixabay.com/get/57e5dd474c51b108f5d084609620367d1c3ed9e04e50744176297bd09449c1_340.png'
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
