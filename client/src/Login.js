// ***** Login component for Roost News used on Login page *****

import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login(props) {

  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log("in handle login function");

    const loginData = {
      "email": email,
      "password": password,
      "active": false
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
  
  return (
    <div>
      <br/>
      <br/>
      <h2>Log In to Your Roost News Account</h2>
      <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="email" name="email" value={email} onChange={evt => setEmail(evt.target.value)}/><br/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" name="password" value={password} onChange={evt => setPassword(evt.target.value)}/><br/>
      </Form.Group>
      <Button color="primary" variant="contained" onClick={handleLogin} type="submit">Log In</Button> 
      </Form>
    </div>  
  )
}

export default Login;