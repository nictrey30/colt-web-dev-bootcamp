let mongoose = require('mongoose');
// deprecation handlers mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

let Post = require('./models/post');
let User = require('./models/user');

// connect to a db
mongoose.connect('mongodb://localhost:27017/blog_demo_2');

// User.create(
//   {
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
//   },
//   (err, user) => (err ? console.log(err) : console.log(user))
// );

// Post.create(
//   {
//     title: 'Post 4',
//     content: 'Veni Vidi Vici'
//   },
//   (err, post) => {
//     User.findOne({ name: 'Bob Belcher' }, function(err, foundUser) {
//       if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save();
//       }
//     });
//   }
// );

// find user - and find all posts for that user
User.findOne({ name: 'Bob Belcher' })
  .populate('posts')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
