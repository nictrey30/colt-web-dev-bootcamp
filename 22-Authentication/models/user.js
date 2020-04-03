const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");
let UserSchema = new mongoose.Schema({
  user: String,
  password: String
});
// telling User to use serialize and deserialize methods of passportLocalMongoose
UserSchema.plugin(passportLocalMongoose);
module.exports = new mongoose.model("User", UserSchema);
