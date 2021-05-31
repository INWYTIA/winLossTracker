const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/win-loss", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
