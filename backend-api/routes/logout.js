// ***** Route to handle existing user authentication for Roost News *****

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  
  //Logout user 
  req.session.id = null;
  res.json('{"success": true}');
}); 

module.exports = router;