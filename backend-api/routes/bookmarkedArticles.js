// ***** Route to retrieving a user's bookmarked articles *****

const express = require('express');
const router = express.Router();
const bookmarks = require('../models/bookmark.model.js');
const session = require('express-session');

router.get('/', function(req, res, next) {
  
  console.log("in bookmarked articles route");
  const userId = session.user.userId;
  console.log("session id in bookmarked articles route, userId:", userId);
  bookmarks.getBookmarksByUserId(userId)
    .then(result => {
      console.log("result of get bookmarks for user:", result);
      console.log("result row [0]['title']", result[0]['title']);
      if (!result) {
        res.status(400).json('{"error": "No bookmarks for user"}');
      } else {
          res.json(result);
      }      
    })  
    .catch(err => {
      console.log("Error receiving result of user log in from bookmark model", err); 
      res.status(500);
    });
  }); 

module.exports = router;