const express = require('express'),
  app = express(),
  mongoose = require('mongoose');

let port = 4000;
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});
app.get('/secret', function(req, res) {
  res.render('secret');
});

app.listen(port, () => console.log(`started server on port ${port}`));
