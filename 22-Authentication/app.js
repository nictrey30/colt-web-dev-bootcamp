const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user");

let port = 4000;

// deprecation handlers mongoose
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
// mongoose connection
mongoose.connect("mongodb://localhost:27017/auth-demo");

// set app to use express-session
app.use(
  require("express-session")({
    secret: "Ana are 5 mere !!",
    resave: false,
    saveUninitialized: false
  })
);
// app config
app.set("view engine", "ejs");
// tell app to use passport module
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
  res.render("home");
});
app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(port, () => console.log(`Started server on port ${port}`));
