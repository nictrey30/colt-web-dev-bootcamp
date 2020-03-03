let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 3000;
let friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];
// tell express to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/friends', function(req, res) {
  res.render('friends', { friends: friends });
});

app.post('/addFriend', function(req, res) {
  // req.body is an obj that will contain all of the data from the request body,
  // after is parsed by express using body-parser package
  // console.log(req.body);
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen(port, () => console.log(`server started on port ${port}`));
