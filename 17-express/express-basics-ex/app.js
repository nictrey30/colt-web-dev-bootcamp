let express = require('express');
let app = express();
const port = 3000;

// visiting "/" should print "Hi there, welcome to my assignment"
app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment!');
});
// visiting "/speak/pig" should print "The pig says 'Oink'"
// visiting "/speak/cow" should print "The cow says 'Moo'"
// visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get('/speak/:animal', function(req, res) {
  let animal = req.params.animal;
  let sound = '';
  if (animal === 'pig') {
    sound = 'Oink!';
  } else if (animal === 'cow') {
    sound = 'Moo!';
  } else if (animal === 'dog') {
    sound = 'Woof Woof!';
  }
  res.send(`The ${animal} says ${sound}`);
});
// visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// visiting "/repeat/hello/3" should print "hello hello hello"
// visiting "/repeat/blah/2" should print "blah blah"
app.get('/repeat/:word/:times', function(req, res) {
  let times = Number(req.params.times);
  let word = req.params.word;
  let result = '';
  for (let i = 0; i < times; i++) {
    result += `${word} `;
  }
  res.send(result);
});
// if a user visits any other route, print:
// "Sorry, page not found...What are you doing with your life?"
app.get('*', function(req, res) {
  res.send('Sorry, page not found...What are you doing with your life?');
});

app.listen(port, () => console.log(`listening app on port ${port}`));
