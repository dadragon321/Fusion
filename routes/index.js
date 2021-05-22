const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Fusion" });
});

router.get("/form", (req, res) => {
  res.render("form", { title: "Fusion" });
});

router.get("/clear", (req, res) => {
  res.render("clear", { title: "Fusion" });
});

router.get("/unclear", (req, res) => {
  res.render("unclear", { title: "Fusion" });
});

router.post("/form", async (req, res) => {
  if (req.body.diagnosis==0 && req.body.fever==0 && req.body.gi==0 && req.body.respiratory==0 && req.body.neurological==0 && req.body.pain==0 && req.body.temperature==0) {
    res.render("clear", { title: "Fusion", name: req.body.fname.concat(" ", req.body.lname) });
  }
  else {
    res.render("unclear", { title: "Fusion" });
  }
});

module.exports = router;
