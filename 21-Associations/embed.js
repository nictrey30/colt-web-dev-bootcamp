let mongoose = require('mongoose');
// deprecation handlers mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// connect to a db
mongoose.connect('mongodb://localhost:27017/blog_demo');

// POST - title, content - we need to define it first if we want to use it in the userSchema
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});
// USER - emails, name
let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
let User = mongoose.model('User', userSchema);
let Post = mongoose.model('Post', postSchema);

// let newUser = new User({
//   email: 'Ioana@spiru-haret.edu',
//   name: 'Ioana Picicoasa'
// });
// newUser.posts.push({
//   title: 'Play with cats',
//   content: 'She took ker kitty and played in the park'
// });
// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
// let newPost = new Post({
//   title: 'Reflections on Apples',
//   content: 'They are delicious'
// });
// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
// User.findOne({ name: 'Ioana Picicoasa' }, function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     user.posts.push({
//       title: 'Dogs',
//       content: 'I like also dogs very much, maybe better than kitties'
//     });
//     user.save(function(err, user) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(user);
//       }
//     });
//   }
// });
