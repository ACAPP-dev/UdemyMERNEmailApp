require("dotenv").config();
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // function to add data to database
      console.log("accessToken", accessToken);
      console.log("refreshToken: ", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Needs to be 8080 for Docker (or tell Docker 5000)
const PORT = process.env.PORT || 5000;

app.listen(PORT);
