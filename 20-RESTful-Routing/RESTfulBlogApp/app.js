const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  port = 4000;
// APP config
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/restful_blog_app');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
// Moongose/Model config
let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now() }
});
let Blog = mongoose.model('Blog', blogSchema);
// RESTful Routes
app.get('/', function(req, res) {
  res.redirect('/blogs');
});
// INDEX ROUTE
app.get('/blogs', function(req, res) {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});
// NEW ROUTE
app.get('/blogs/new', function(req, res) {
  res.render('new');
});
// CREATE ROUTE
app.post('/blogs', function(req, res) {
  // create blog
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      console.log(err);
      res.render('new');
    } else {
      // then, redirect to the index
      res.redirect('/blogs');
    }
  });
});
// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
      res.redirect('/blog');
    } else {
      res.render('show', { blog: foundBlog });
    }
  });
});
// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
  // use the id to find the correct blog
  Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
      res.redirect('/blog');
    } else {
      res.render('edit', { blog: foundBlog });
    }
  });
});
// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
  // Blog.findByIdAndUpdate(id, newData, callback);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(
    err,
    updatedBlog
  ) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});
// DELETE ROUTE
app.delete('/blogs/:id', function(req, res) {
  // destroy blog
  Blog.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
  // redirect somewhere
});

app.listen(port, () => console.log(`Blog server started on port ${port}`));
