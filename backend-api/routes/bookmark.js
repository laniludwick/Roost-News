// ***** Route to save (a.k.a. "bookmarking") articles onto a user's account *****

var express = require('express');
var router = express.Router();
const bookmark = require('../models/bookmark.model.js');

router.post('/', function(req, res, next) {

  // //Find user using sessions
  // const email = req.body.email;
  // *const userId = session.id
  
  //Article info
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const urlToImage = req.body.urlToImage;
  const date = req.body.date;
  const content = req.body.content;

  bookmark.create(author, title, description, url, urlToImage, date, content)
  .then(result => {
    console.log("result of saving article to user's account:", result);
    result_array = [];
    for (const key in result){
      if (key ==="insertId"){
        result_array.push(key);
      } 
    }
    console.log("result_array", result_array)

    res.json(result_array);
  })    
  .catch(err => {
    console.log("Error receiving result of saving article from bookmark model", err); 
    res.status(500);
  });
}); 

module.exports = router;

