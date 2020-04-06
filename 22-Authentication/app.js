const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
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
    saveUninitialized: false,
  })
);
// app config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// tell app to use passport module
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES
// ==========
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/secret", function (req, res) {
  res.render("secret");
});
// Auth Routes
app.get("/register", function (req, res) {
  res.render("register");
});
// handling user signup
app.post("/register", function (req, res) {
  // res.send("Register POST Route");
  // .register() method is from UserSchema.plugin(passportLocalMongoose)
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("register");
      }
      // log the user in
      passport.authenticate("local")(req, res, function () {
        res.redirect("secret");
      });
    }
  );
});

app.listen(port, () => console.log(`Started server on port ${port}`));
