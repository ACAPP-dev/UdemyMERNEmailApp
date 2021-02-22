require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/user");
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

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Needs to be 8080 for Docker (or tell Docker 5000)
const PORT = process.env.PORT || 5000;

app.listen(PORT);

mongoose.connect(process.env.MONGO_URI);
