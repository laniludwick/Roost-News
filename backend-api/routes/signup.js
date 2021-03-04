var express = require('express');
var router = express.Router();

const users = require('../models/user.model.js');

router.post('/', function(req, res, next) {

  //Create a new user
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const userPassword = req.body.password;
  const active = req.body.active;
  
  users.getUserByEmail(email)
  .then(result => {
    if (result) {
    res.send(400, {"error": "Existing user."});
    } else {
    users.create(fname, lname, email, userPassword, active)
      .then(result => {
        console.log("result.insertId", result);
        console.log("req.session.id", req.session.id);
        // req.session.id = result.insertId 
        res.send({"success": result});
      })
    }})    
  .catch(err => {
    console.log("Caught an error receiving the result of signup user in model", err); 
    res.status(500);
  });
}); 

module.exports = router;


// module.exports = async (req, res) => {
//   const items = await db.getItems();
//   res.send(items);
// };