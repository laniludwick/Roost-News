
//Access connection to db
const sql = require("./db.js");

exports.create = (req, res) => {
  message = '';

  //Create a new user
  if (req.method == "POST") {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const userPassword = req.body.password;
    const active = req.body.active;

//User db connection query method to execute 
//This method is called when the endpoint gets hit (the crud function is called there), 
//and this is the definition of the crud function.
//The argument for newUser parameter is "user" which contains data sent into the crud function via the FE when endpoint is hit.

  const sqlCommand = "INSERT INTO `users` (`fname`, `lname`, `email`, `userPassword`, `active') VALUES ('"+fname+"', '"+lname+"', '"+email+"', '"+userPassword+"', '"+active+"')";
  sql.query(sqlCommand, function(err, result) {
    if (err) {
      console.log("error: ", err);
      // result(err, null);
      // return;
    }
    res.render('signup', {message: "Successfully signed up"});
    // console.log("created customer: ", {id: res.insertId, ...newUser });
    // result(null, {id: res.insertId, ...newUser });
  }); //End sql query 
  } else {
    res.render("not post method for signup")
  };
  //verify that the user exists in the db
  //if doesn't exist, respond to frontend with error
  //else if both email and password are correct, 
  //login user and respond to frontend with success message
  //else responsd to frontend with error message 'email or password'

}

