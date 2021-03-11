// ***** Route to handle existing user authentication for Roost News *****

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  
  //Logout user 
  req.session.id = null;
  alert("You are now logged out of your account. Please visit us again!")
  res.json('{"success": true}');
}); 

module.exports = router;