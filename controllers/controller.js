const express = require("express");
const router = express.Router();
const Competition = require("../models/competition.js");

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/api/competition", ({body}, res) => {
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
  
router.get("/api/competition", (req, res) => {
    Competition.find({}).sort({date: -1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});

module.exports = router;
