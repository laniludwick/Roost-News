// ***** Route to save (a.k.a. "bookmarking") articles onto a user's account *****

const express = require('express');
const router = express.Router();
const bookmark = require('../models/bookmark.model.js');
const session = require('express-session');

router.post('/', function(req, res, next) {
  console.log("Entering bookmark route");
  const sessionData = req.session;
  sessionData.use = {}

  console.log("In bookmark route!");
  // console.log("sessionData.user", sessionData.user);
  
  
  //Article info
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const urlToImage = req.body.urlToImage;
  const date = req.body.date;
  const content = req.body.content;
  const userId = 74;

  bookmark.create(userId, author, title, description, url, urlToImage, date, content)
  .then(result => {
    console.log("result of saving article to user's account:", result);
    result_array = [];
    for (const key in result){
      if (key ==="insertId"){
        result_array.push(key);
      } 
    }
    console.log("result_array", result_array);
    console.log("result id", result.insertId);
    console.log("req session user.userid in bookmark route", req.session.user.userId);
    res.json(result_array);
  })    
  .catch(err => {
    console.log("Error receiving result of saving article from bookmark model", err); 
    res.status(500);
  });
}); 

module.exports = router;

