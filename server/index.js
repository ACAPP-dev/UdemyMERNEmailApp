require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./models/user");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Needs to be 8080 for Docker (or tell Docker 5000)
const PORT = process.env.PORT || 5000;

app.listen(PORT);

mongoose.connect(process.env.MONGO_URI);
