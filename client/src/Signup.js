// ***** Signup component for Roost News used on Signup page *****

import React from 'react';
// import { useHistory } from "react-router-dom";
// import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { Form, Button } from "react-bootstrap";

function SignUpUser() {

  // const history = useHistory();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [apiResponse, setApiResponse] = React.useState("");  

  // fetch("http://localhost:9000/login")
  //   .then(res => res.text())
  //   .then(data => setApiResponse(data))
  //   .catch(err => err);

  // //First arg of userReducer is form reducer function: (state, {field: value}) => state.set(field, value)
  // const [signUpInputs, setSignUpInputs] = React.useReducer(
  //   (state, newState) => {
  //     console.log("state", state);
  //     console.log("newState", newState);
  //   return {...state, ...newState}
  //   },
  //   //initial form state, immutable map of the initial state
  //   {
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     password: "",
  //   }
  // );

  // const handleChange = evt => {
  //   const field = evt.target.name;
  //   const value = evt.target.value;
  //   setSignUpInputs({[field]: value});
  //   //console.log("sign up field, value", field, value)
  //   console.log("sign up inputs:", signUpInputs)
  // }  
  
  const handleSignup = (evt) => {
    evt.preventDefault();
    console.log("in handle signup function");

    const signUpData = {
      "fname":fname,
      "lname":lname,
      "email":email,
      "password":password,
      "active":false
    }

    // const signUpData = {
    //   "fname":signUpInputs.fname,
    //   "lname":signUpInputs.lname,
    //   "email":signUpInputs.email,
    //   "password":signUpInputs.password
    // } 
    console.log("Sign up data", signUpData)
    //localStorage.setItem("email", signUpInputs.email);

    // fetch ('/api/signup', {)
      fetch ("http://localhost:9000/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(signUpData),

    })
    .then(res => res.text())
    .then(data => setApiResponse(data))
    .catch(err => err);
  }
  
  //   fetch ("http://localhost:9000/signup", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(signUpData),

  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.access_token){
  //       localStorage.setItem("user", data.access_token);
  //       localStorage.setItem("email", email);
  //       alert("You are now logged in!");
  //       // history.push("/");
  //   }}); 
  // };
  
  return (
    <div>
      <br/>
      <br/>
      <h2>Create a Roost News Account</h2>
      <p>{apiResponse}</p>
      <Form>
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" id="fname" name="fname" value={fname} onChange={evt => setFname(evt.target.value)}/><br/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" id="lname" name="lname" value={lname} onChange={evt => setLname(evt.target.value)}/><br/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="email" name="email" value={email} onChange={evt => setEmail(evt.target.value)}/><br/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" name="password" value={password} onChange={evt => setPassword(evt.target.value)}/><br/>
      </Form.Group>
      <Button color="primary" variant="contained" onClick={handleSignup} type="submit">Complete Sign Up</Button> 
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

export default SignUpUser