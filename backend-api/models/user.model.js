
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
    }); //End sql query  
})}

// async function getItems() {
//   return new Promise((acc, rej) => {
//       pool.query('SELECT * FROM todo_items', (err, rows) => {
//           if (err) return rej(err);
//           acc(
//               rows.map(item =>
//                   Object.assign({}, item, {
//                       completed: item.completed === 1,
//                   }),
//               ),
//           );
//       });
//   });
// }



exports.getUserByEmail = (email) => {
  return new Promise ((acc, rej) => {
    const sqlCommand = "SELECT email FROM users WHERE email='"+email+"'";
    sql.query(sqlCommand, function(err, result) {
      if (err) {
        console.log("error: ", err);
        rej(err);
      }
      else {
        console.log("found customer:", result);
        acc(result);
      }
    }); //End sql query  
  });
}

  //verify that the user exists in the db
  //if doesn't exist, respond to frontend with error
  //else if both email and password are correct, 
  //login user and respond to frontend with success message
  //else responsd to frontend with error message 'email or password'


