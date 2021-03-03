var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("API is working in the Express backend - woot!");
});

module.exports = router;