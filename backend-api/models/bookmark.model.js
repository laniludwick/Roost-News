
//Access connection to db
const sql = require("./db.js");

exports.create = (userId, author, title, articleDescription, url, urlToImage) => {
  console.log("In bookmark model create");
  return new Promise((acc, rej) => {
    
    const sqlCommand = "INSERT INTO bookmark (id, userId, author, title, articleDescription, articleURL, urlToImg) VALUES (null, '"+userId+"', '"+author+"', '"+title+"', '"+articleDescription+"', '"+url+"', '"+urlToImage+"')";
        
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

exports.getBookmarksByUserId = (userId) => {
  console.log("In bookmark model get bookmarks by userId");
  return new Promise ((acc, rej) => {
    
    const sqlCommand = "SELECT id, author, title, articleDescription, articleURL, urlToImg, userID FROM bookmark WHERE userID='"+userId+"'";
    
    sql.query(sqlCommand, function(err, result) {
      if (err) {
        console.log("error: ", err);
        rej(err);
      }
      else {
        console.log("found bookmarks for user:", result);
        acc(result);
      }
    }); 
  });
}