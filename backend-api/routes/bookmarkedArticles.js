// ***** Route to retrieving a user's bookmarked articles *****

const express = require('express');
const router = express.Router();
const bookmarks = require('../models/bookmark.model.js');

router.get('/', function(req, res, next) {
  
  //Authenticate existing user
  const id = req.body.userId;

  bookmarks.getBookmarksByUserId(id)
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