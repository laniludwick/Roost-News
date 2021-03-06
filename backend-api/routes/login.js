// ***** Route to handle existing user authentication for Roost News *****

var express = require('express');
var router = express.Router();
const users = require('../models/user.model.js');

router.post('/', function(req, res, next) {
  
  //Authenticate existing user
  const email = req.body.email;
  const userPassword = req.body.password;

  users.getUserByEmail(email)
    .then(result => {
      console.log("result row [0]['email']", result[0]['email']);
      console.log("result row [0]['userPassword']", result[0]['userPassword']);
      if (!result) {
        res.status(400).json('{"error": "Incorrect email address or password"}');
      } else {
        if (result[0]['userPassword'] === userPassword) {
          console.log("req.session.id", req.session.id);
          // req.session.id = result.insertId 
          res.json('{"success": result}');
        } else {
          res.status(400).json('{"error": "Incorrect email address or password"}');
        }
      }      
    })  
    .catch(err => {
      console.log("Error receiving result of user log in from user model", err); 
      res.status(500);
    });
  }); 

module.exports = router;