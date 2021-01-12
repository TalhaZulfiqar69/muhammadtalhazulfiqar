const express = require("express");
const router = express.Router();
router.get(
  "/welcome",
  (req, res, next) => {
    console.log("this message from the welcome route first callBack");
    // res.status(200).send("this message from the welcome route first callBack");
    next();
  },
  function (req, res, next) {
    console.log("this message from the welcome route second callBack");
    // res.status(200).send("this message from the welcome route second callBack");
    next();
  },
  function (req, res, next) {
    console.log("this message from the welcome route third callBack");
    res.status(200).send("this message from the welcome route third callBack");
    // return next();
  }
);
module.exports = router;
