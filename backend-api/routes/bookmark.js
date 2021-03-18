// ***** Route to save (a.k.a. "bookmarking") articles onto a user's account *****

const express = require('express');
const router = express.Router();
const bookmark = require('../models/bookmark.model.js');
const session = require('express-session');
const { LoopDetected } = require('http-errors');

router.post('/', function(req, res, next) {
  console.log("Entering bookmark route");
  const sessionData = req.session;
  sessionData.use = {}

  console.log("In bookmark route!");
  // console.log("sessionData.user", sessionData.user);
  
  
  //Article info
  console.log("article info below");
  let author = req.body.author;
  let title = req.body.title;
  let articleDescription = req.body.description;
  let url = req.body.url;
  let urlToImage = req.body.urlToImage;
  // let date = req.body.date;
  let content = req.body.content;
  console.log("req session user.userid in bookmark route", req.session.user.userId);
  const userId = req.session.user.userId;
  console.log("author, title, descr, url:", author, title, articleDescription, url);
  
  // if (typeof(date) === 'undefined') {
  //   console.log("date:", date);
  //   date = null;
  //   console.log("date:", date);
  // }
  bookmark.create(userId, author, title, articleDescription, url, urlToImage)
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
    res.json(result_array);
  })    
  .catch(err => {
    console.log("Error receiving result of saving article from bookmark model", err); 
    res.status(500);
  });
}); 

module.exports = router;

