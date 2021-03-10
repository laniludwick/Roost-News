
//Access connection to db
const sql = require("./db.js");

exports.create = (author, title, description, url, urlToImage, date, content) => {
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