const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const Competition = require("./models/competition.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/win-loss", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.post("/api/competition", ({body}, res) => {
  console.log(body);
  Competition.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
