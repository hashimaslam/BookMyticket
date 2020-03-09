var express = require("express");
var router = express.Router();
const verify = require("../verifyTokens");

router.get("/", verify, (req, res, next) => {
  res.json({
    message: "manish@gmail.com"
  });
});

router.post("/signup", (req, res, next) => {
  res.json({
    message: "you got me sir"
  });
});

module.exports = router;
