const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 27017;

// const Workout = require("/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
