
//Access connection to db
const sql = require("./db.js");

exports.create = (fname, lname, email, userPassword, active) => {
  return new Promise((acc, rej) => {
  
    const sqlCommand = "INSERT INTO users (id, fname, lname, email, userPassword, active) VALUES (null, '"+fname+"', '"+lname+"', '"+email+"', '"+userPassword+"', null)";
    
      sql.query(sqlCommand, function(err, result) {
      if (err) {
        console.log("error: ", err);
        rej(err);
      }
      else {
        console.log("created customer:", result.insertId);
        acc(result);
      }
    }); 
})}

exports.getUserByEmail = (email) => {
  return new Promise ((acc, rej) => {
    
    const sqlCommand = "SELECT email, userPassword FROM users WHERE email='"+email+"'";
    
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


