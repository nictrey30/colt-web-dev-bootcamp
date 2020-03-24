let mongoose = require('mongoose');
// POST - title, content - we need to define it first if we want to use it in the userSchema
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});
module.exports = mongoose.model('Post', postSchema);
