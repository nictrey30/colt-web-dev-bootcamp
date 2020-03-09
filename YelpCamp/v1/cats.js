let mongoose = require('mongoose');

// deprecation handlers
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// connect to a db
mongoose.connect('mongodb://localhost/cat_app');

let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

let Cat = mongoose.model('Cat', catSchema);
/*
// adding a new cat to the db

let george = new Cat({
  name: 'George',
  age: 11,
  temperament: 'Grouchy'
});

// the function inside save() will be called when the save is done, wether it worked or not
george.save(function(err, cat) {
  if (err) {
    console.log('somethin went wrong');
  } else {
    console.log('we just saved a cat to the db');
    console.log(cat);
  }
});

const runSave = async () => {
  console.log(`mongoose version: ${mongoose.version}`);
  const data = await jimmy.save();
  return data;
};
runSave()
  .then(data => console.log(data))
  .catch(err => console.log(err));

// new and save() in one step = create()

Cat.create(
  {
    name: 'Geeney',
    age: 3,
    temperament: 'playful'
  },
  (err, cat) => {
    if (err) {
      console.log(`Oh no ERROR on creating a Cat; ${err}`);
    } else {
      console.log(cat);
    }
  }
);
*/
// retrieve all cats from the db and console.log each one
Cat.find({}, (err, cats) => {
  if (err) {
    console.log(`Oh no ERROR; ${err}`);
  } else {
    console.log(cats);
  }
});
