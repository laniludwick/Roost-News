
//Access connection to db
const sql = require("./db.js");

exports.create = (userId, author, title, description, url, urlToImage, date, content) => {
  console.log("In bookmark model create");
  return new Promise((acc, rej) => {
    
    const sqlCommand = "INSERT INTO articles (userId, author, headline, articleDescription, articleURL, urlToImg, publishedAt, content) VALUES (null, '"+author+"', '"+title+"', '"+description+"', '"+url+"', '"+urlToImage+"', '"+date+"', '"+content+"')";
    
      sql.query(sqlCommand, function(err, result) {
      if (err) {
        console.log("error: ", err);
        rej(err);
      }
      else {
        console.log("created bookmark:", result.insertId);
        acc(result);
      }
    }); 
})}

exports.getBookmarksByEmail = (email) => {
  console.log("In bookmark model get bookmarks by email");
  return new Promise ((acc, rej) => {
    
    const sqlCommand = "SELECT email, userPassword FROM articles WHERE email='"+email+"'";
    
    sql.query(sqlCommand, function(err, result) {
      if (err) {
        console.log("error: ", err);
        rej(err);
      }
      else {
        console.log("found customer:", result);
        acc(result);
      }
    }); 
  });
}