const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
require("dotenv").config();

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // function to add data to database
      //console.log("accessToken", accessToken);
      //console.log("refreshToken: ", refreshToken);
      //console.log("profile: ", profile);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a user - future functionality
          console.log(existingUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
          }).save();
        }
      });
    }
  )
);
