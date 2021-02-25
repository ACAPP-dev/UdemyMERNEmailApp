require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./models/Survey");
require("./services/passport");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// code for Express to recognize front end in Heroku production environment
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // such as main.js or main.css
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if it doesn't recognize the route.
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Needs to be 8080 for Docker (or tell Docker 5000)
const PORT = process.env.PORT || 5000;

app.listen(PORT);

mongoose.connect(process.env.MONGO_URI);
