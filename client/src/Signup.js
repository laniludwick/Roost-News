// ***** Signup component for Roost News used on Signup page *****

import React from 'react';
import { useHistory } from "react-router-dom";
import { TextField, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function SignUpUser(props) {

  const history = useHistory();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //const [apiResponse, setApiResponse] = React.useState("");  

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
      "password":password
    }

    // const signUpData = {
    //   "fname":signUpInputs.fname,
    //   "lname":signUpInputs.lname,
    //   "email":signUpInputs.email,
    //   "password":signUpInputs.password
    // } 
    console.log("Sign up data", signUpData)
    //localStorage.setItem("email", signUpInputs.email);

      fetch ("/api/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(signUpData),
      })
    .then(res => res.json())
    .then(data => {
      if (data[0] === "insertId") {    
        //setApiResponse(data);
        localStorage.setItem("userEmail", email);
        console.log(localStorage.getItem("userEmail"));
        alert("You are now logged in!");
        props.setLoggedInState(true);
        history.push("/");
      }
    })
    .catch(err => err);
  }
  
  const classes = useStyles();

  return (
    <div>
      <br/>
      <br/>
      <Container className="signup">
        <div className="signup-login-header">
          <h2>Create an Account</h2>
        </div>
        <div className="signup-login-form">
          <TextField name="fname" value={fname} fullWidth label="First Name" onChange={evt => setFname(evt.target.value)} required={true}/>
          <TextField name="lname" value={lname} fullWidth label="Last Name" onChange={evt => setLname(evt.target.value)} required={true}/>
          <TextField name="email" value={email} fullWidth label="Email Address" onChange={evt => setEmail(evt.target.value)} required={true} type="email" helperText="We'll never share your email."/>
          <TextField name="password" value={password} fullWidth label="Password" onChange={evt => setPassword(evt.target.value)} required={true} type="password"/>
          <br/><br/>
          <Button color="primary" variant="contained" fullWidth className={classes.root} onClick={handleSignup} type="submit">Complete Sign Up</Button>
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


export default SignUpUser


