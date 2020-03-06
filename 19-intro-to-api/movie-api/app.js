let express = require('express');
let app = express();
let fetch = require('node-fetch');
const port = 3000;

// serve the contents of the 'public' folder
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('search');
});

app.get('/results', async function(req, res) {
  let query = req.query.searchTerm;
  const result = await fetch(
    `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
  );
  const data = await result.json();
  console.log(data);
  res.render('results', { data: data });
});

app.listen(port, () => console.log(`Movie app has started on port ${port}`));
