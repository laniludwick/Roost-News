// ***** Route to retrieve a newsfeed from the newsAPI *****

//body-parser parses the request and create the req.body object 
// require('dotenv').config({ path: require('find-config')('.env') })
const express = require('express');
const router = express.Router();
const path = require('path');
require('dotenv').config({path: __dirname + '/../../.env'})
const apiKey = process.env.REACT_APP_NEWS_API_KEY
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKey);

//A new body object containing the parsed data is populated on the request 
//object after the middleware (i.e. req.body). This object will contain key-value 
//pairs, where the value can be any type (when extended is true).

router.get("/", (req, res) => {

  //include at least one q, source, or domain
  newsapi.v2.everything({
  //   q: 'bitcoin',
    sources: 'bbc-news,the-verge',
  //   domains: 'bbc.co.uk, techcrunch.com',
    from: '2021-3-1',
    to: '2021-3-4',
    language: 'en',
    sortBy: 'relevancy',
    page: 1
    })
    .then(response => {
      // console.log("Backend console log response:", response);
      /*
        {
          status: "ok",
          articles: [...]
        }
      */
      res.json(response);
    });  
});

module.exports = router;