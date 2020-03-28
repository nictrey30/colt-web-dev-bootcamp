const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Campground = require('./models/campground'),
  Comment = require('./models/comment'),
  seedDB = require('./seeds');
const port = 3000;

// deprecation handlers mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// connect to a db
mongoose.connect('mongodb://localhost:27017/yelp_camp_v4');
app.use(bodyParser.urlencoded({ extended: true }));
// serve the contents of the 'public' folder
app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs');
seedDB();

// add a new campground to the database
/*Campground.create(
  {
    name: 'Salmon Creek',
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg',
    description:
      " Sewer smells, run down crowded park on the poor side of town. Wifi was nonexistent most of the time. We won't return! "
  },
  (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      console.log('new campground created!');
      console.log(campground);
    }
  }
);*/

app.get('/', function(req, res) {
  res.render('landing');
});

// index - show all campgrounds
app.get('/campgrounds', function(req, res) {
  // get all the campgrounds from db
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', { campgrounds: allCampgrounds });
    }
  });
});

// new - show form to create campground
app.get('/campgrounds/new', function(req, res) {
  res.render('campgrounds/new');
});

// create - add new campground to db
// same url, but totally different routes - follows REST
app.post('/campgrounds', function(req, res) {
  // res.send('You hit the post route');
  // get data from form and add to campgrounds array
  console.log(req.body);
  let name = req.body.name;
  let image = req.body.image;
  let description = req.body.description;
  // create a new campground and save to database
  let newCampground = { name, image, description };
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`campground created \n ${newlyCreated}`);
      // redirect back to campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

// show - shows more info about one campground
app.get('/campgrounds/:id', function(req, res) {
  // find the campground with the provided id
  Campground.findById(req.params.id)
    .populate('comments')
    .exec((err, foundCampground) => {
      if (err) {
        console.log(err);
      } else {
        // render show template with that campground
        res.render('campgrounds/show', { campground: foundCampground });
      }
    });
});
// ========================
// COMMENTS ROUTE
// ========================
app.get('/campgrounds/:id/comments/new', function(req, res) {
  // find campground by id
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', { campground: campground });
    }
  });
});
app.post('/campgrounds/:id/comments', function(req, res) {
  // lookup campground using id
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      // console.log(req.body.comment);
      // create new comment
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          // connect new comment to campground
          console.log(campground.comments); // "5e7bd772a2b2580afd15411b"]
          campground.comments.push(comment);
          campground.save();
          console.log(campground.comments); // ["5e7bd772a2b2580afd15411b","5e7bd794a2b2580afd154121"]
          // redirect campground show page
          res.redirect(`/campgrounds/${campground._id}`);
        }
      });
    }
  });
});

app.listen(port, () =>
  console.log(`YelpCamp Server has started! on port ${port}`)
);
