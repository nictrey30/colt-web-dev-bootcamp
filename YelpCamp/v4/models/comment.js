let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
  text: String,
  author: String
});
module.exports = new mongoose.model('Comment', commentSchema);
