// ***** Route to handle existing user authentication for Roost News *****

const express = require('express');
const session = require('express-session');
const router = express.Router();
const users = require('../models/user.model.js');

router.post('/', function(req, res, next) {
  
  //Authenticate existing user
  const email = req.body.email;
  const userPassword = req.body.password;

  users.getUserByEmail(email)
    .then(result => {
      console.log("Result of get user by email in login func:", result)
      console.log("result row [0]['email']", result[0]['email']);
      console.log("result row [0]['userPassword']", result[0]['userPassword']);
      if (!result) {
        res.status(400).json('{"error": "Incorrect email address or password"}');
      } else {
        if (result[0]['userPassword'] === userPassword) {
          console.log("userid", result[0]['id']);
          session.user = {};
          session.user.userId = result[0]['id'];
          console.log("session user.userid", session.user.userId);
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