let mongoose = require('mongoose');
// USER - emails, name
let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    // a mongoose ObjectId belonging to a post
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});
module.exports = mongoose.model('User', userSchema);
