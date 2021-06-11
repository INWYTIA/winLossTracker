const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res) {
    //let hbsObject = {
    //    competitions: []
    //};
    db.Competition.find({}).lean().then(data => {
        //hbsObject.competitions = data;
        //res.render("index", hbsObject);
    })
});

router.post("/api/competition", ({body}, res) => {
    db.Competition.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
});

router.get("/api/competition/detail", (req, res) => {
    db.Competition.findById(req.query.id).lean().then(data => {
      //let hbsObject = {
      //  detail: data
      //};
      //res.render("comp", hbsObject);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

module.exports = router;
