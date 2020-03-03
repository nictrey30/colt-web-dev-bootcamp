let express = require('express');
let app = express();
const port = 3000;

// serve the contents of the 'public' folder
app.use(express.static('public'));
// to tell render() the file to render is .ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // res.send('<h1>Welcome to the home page!<h1>');
  res.render('home');
});
app.get('/fallinlovewith/:thing', function(req, res) {
  let thing = req.params.thing;
  // res.send(`You fell in love with ${thing}`);
  res.render('love', { thingVar: thing });
});
app.get('/posts', function(req, res) {
  let posts = [
    { title: 'Post 1', author: 'Susy' },
    { title: 'Post 2', author: 'Charlie' },
    { title: 'Post 3', author: 'Gizas' }
  ];
  res.render('posts', { posts: posts });
});
app.listen(port, () => console.log(`server started on port ${port}`));
