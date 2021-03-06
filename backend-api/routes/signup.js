// ***** Route to handle new user signup for Roost News *****

var express = require('express');
var router = express.Router();
const users = require('../models/user.model.js');

router.post('/', function(req, res, next) {

  //Create a new user
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const userPassword = req.body.password;
  const active = req.body.active;
  
  users.getUserByEmail(email)
    .then(result => {
      if (result.length > 0) {
      res.status(400).json({"error": "Existing user found with that email address."});
      console.log("existing user:", result);
      } else {
      users.create(fname, lname, email, userPassword, active)
        .then(result => {
          console.log("result of new user creation:", result);
          console.log("req.session.id", req.session.id);
          result_array = [];
          for (const key in result){
            if (key ==="insertId"){
              result_array.push(key);
            } 
          }
          console.log("result_array", result_array)
          // req.session.id = result.insertId 
          res.json(result_array);
        })
      }})    
    .catch(err => {
      console.log("Error receiving result of user signup from user model", err); 
      res.status(500);
    });
  }); 

module.exports = router;

