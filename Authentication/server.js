const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  sessions = require('client-sessions');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); // for unique field in the Schema
mongoose.connect('mongodb://localhost:27017/ss-auth');

// Models
let User = new mongoose.model(
  'User',
  new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  })
);

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  sessions({
    cookieName: 'session',
    secret: 'woosafd32532wfsf',
    duration: 30 * 60 * 1000
  })
);

// Routes
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/register', function(req, res) {
  res.render('register');
});
app.post('/register', function(req, res) {
  // res.send('POST req succes');
  // res.json(req.body);
  User.create(req.body, (err, user) => {
    if (err) {
      let error = 'Something bad happened! Please try again.';
      if (err.code === 11000) {
        error = 'That email is already taken, please try another.';
      }
      res.render('register', { error: error });
    } else {
      req.session.userId = user._id;
      res.redirect('/dashboard');
    }
  });
});

app.get('/login', function(req, res) {
  res.render('login');
});
app.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user || user.password !== req.body.password) {
      res.render('login', { error: 'Incorrect email / password' });
    } else {
      req.session.userId = user._id;
      res.redirect('/dashboard');
    }
  });
});

app.get('/dashboard', function(req, res) {
  if (!(req.session && req.session.userId)) {
    res.redirect('/login');
  }
  User.findById(req.session.userId, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.redirect('/login');
    }
    res.render('dashboard');
  });
});
app.listen(3000, () => console.log('started server on port 3000'));
