// ***** Login component for Roost News used on Login page *****

import React from 'react';
import { useHistory } from "react-router-dom";
import { TextField, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function Login(props) {

  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log("in handle login function");

    const loginData = {
      "email": email,
      "password": password
    }

    console.log("login data", loginData);

    // fetch ('/api/login', {)
    fetch ("http://localhost:9000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body: JSON.stringify(loginData),
    })
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
      if (data === '{"success": result}') {
        localStorage.setItem("userEmail", email);
        console.log(localStorage.getItem("userEmail"));
        alert("You are now logged in!");
        props.setLoggedInState(true);
        history.push("/");
      } else {
        console.log("Error", data);
        alert("Error: Incorrect email or password");
      }
    })
    .catch(err => err);
    console.log("Err");
    
  }
  const classes = useStyles();

  return (
    <div>
    <br/>
    <br/>
    <Container className="login">
      <div className="signup-login-header">
        <h2>Welcome Back!</h2>
      </div>
      <div className="signup-login-form">
        <TextField name="email" value={email} fullWidth label="Email Address" onChange={evt => setEmail(evt.target.value)} required={true} type="email"/>
        <TextField name="password" value={password} fullWidth label="Password" onChange={evt => setPassword(evt.target.value)} required={true} type="password"/>
        <br/><br/>
        <Button color="primary" variant="contained" fullWidth className={classes.root} onClick={handleLogin} type="submit">Log In</Button>
      </div>
    </Container>
    </div>   
  )
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #336600 30%, #59b300 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


export default Login;

