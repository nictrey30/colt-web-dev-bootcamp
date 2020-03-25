let mongoose = require('mongoose');
// schema setup
let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  // comments property should be an array of comments Ids
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});
module.exports = mongoose.model('Campground', campgroundSchema);
