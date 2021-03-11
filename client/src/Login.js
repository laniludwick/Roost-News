// ***** Login component for Roost News used on Login page *****

import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login(props) {

  console.log("use history:", useHistory);
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [apiResponse, setApiResponse] = React.useState("");  
  
  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log("in handle login function");

    const loginData = {
      "email": email,
      "password": password,
      "active": false
    }

    console.log("login data", loginData)

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
        setApiResponse(data);
        props.setLoggedInState(true);
        history.push("/");
      } else {
        console.log("Error", data);
      }
    })
    .catch(err => err);
  }
  
  return (
    <div>
      <br/>
      <br/>
      <h2>Log In to Your Roost News Account</h2>
      <p>{apiResponse}</p>
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
      {/* <FormControl name="fname" value={fname} onChange={evt => setFname(evt.target.value)}>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input id="signup-fname" required="true" type="text" />
      </FormControl>
      <FormControl name="lname" value={lname} onChange={evt => setLname(evt.target.value)}>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input id="signup-lname" required="true" type="text"/>
      </FormControl><br/>
      <FormControl name="email" value={email} onChange={evt => setEmail(evt.target.value)}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="signup-email" aria-describedby="my-helper-text" required="true" type="email"/>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl name="password" value={password} onChange={evt => setPassword(evt.target.value)}>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="signup-password" required="true" type="password"/>
      </FormControl><br/>*}
      <Button color="primary" variant="contained" onClick={handleSignUp} type="submit">Complete Sign Up</Button> */}
    </div>  
  )
}

export default Login;