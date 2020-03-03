let express = require('express');
let app = express();
const port = 2200;

// Routes
//  "/" -> "Hi there!"
app.get('/', function(req, res) {
  res.send('Hi there!');
});
//  "/bye" -> "Goodbye!"
app.get('/bye', function(req, res) {
  res.send('Goodbye!');
});
//  "/dog" -> "Meow!"
app.get('/dog', function(req, res) {
  console.log('someone made a request to /dog');
  res.send('Meow!');
});
app.get('/r/:subredditName', function(req, res) {
  // console.log(req.params);
  let subreddit = req.params.subredditName;
  res.send(`Welcome to the ${subreddit} page!`);
});
app.get('/r/:subredditName/comments/:id/:title/', function(req, res) {
  console.log(req.params);
  res.send('Welcome to the COMMENTS page');
});

app.get('*', function(req, res) {
  res.send('You are a star!!');
});

// tell Express to listen for requests (start server)
app.listen(port, () => console.log(`listening app on port ${port}`));
