
//Access connection to db
const sql = require("./db.js");

exports.create = (fname, lname, email, userPassword, active) => {
  console.log("In create user in model");
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
  console.log("In get user by email in model");
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


