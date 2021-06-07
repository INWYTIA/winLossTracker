const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res) {
    let hbsObject = {
        competitions: []
    };
    db.Competition.find({}).lean().then(data => {
        hbsObject.competitions = data;
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/competition", ({body}, res) => {
    console.log(body);
    db.Competition.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
});
  
router.get("/api/competition", (req, res) => {
    db.Competition.find({}).sort({date: -1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});

module.exports = router;
