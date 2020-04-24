const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const friends = ['Tony', 'Miranda', 'Justin', 'Pierre'];
// tell express to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/friends', function (req, res) {
  res.render('friends', { friends: friends });
});

app.post('/addFriend', function (req, res) {
  // req.body is an obj that will contain all of the data from the request body,
  // after is parsed by express using body-parser package
  // console.log(req.body);
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
