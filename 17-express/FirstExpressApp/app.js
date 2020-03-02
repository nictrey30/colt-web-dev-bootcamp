let express = require('express');
let app = express();
const port = 2200;

// Routes
//  "/" -> "Hi there!"
app.get('/', function(req, res) {
  res.send('Hi there!');
});
app.get('/bye', function(req, res) {
  res.send('Goodbye!');
});
app.get('/dog', function(req, res) {
  console.log('someone made a request to /dog');
  res.send('Meow!');
});
//  "/bye" -> "Goodbye!"
//  "/dog" -> "Meow!"

// tell Express to listen for requests (start server)
app.listen(port, () => console.log(`listening app on port ${port}`));
