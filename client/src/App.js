// ***** App component for Roost News *****

import './App.css';
import React from 'react';
import Homepage from './Homepage';
import SignUpUser from './Signup';
import Login from './Login';
import RoostNewsLogo from './RoostNewsLogo.png';
import BookmarkedArticles from './BookmarkedArticles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Link, Button } from '@material-ui/core';

function App() {
  
  const [loggedInState, setLoggedInState] = React.useState(false); 
  console.log("Logged in state app:", loggedInState);

  return (
    <div>
      <Router>
        <AppBar position="sticky" color="inherit">
            <Toolbar>
                  <div style={classes.logoCenter}>
                    <Link href="/" color="inherit">
                      <img src={RoostNewsLogo} width="270px" height="40px" classes={classes.logo} alt="roost-news-logo"/>
                    </Link>
                  </div>
                  <div style={classes.navLinks}>
                    {loggedInState !== true? 
                    [<Button key={1} color="inherit" href="/signup">Sign Up</Button>,
                    <Button key={2} color="inherit" href="/login">Login</Button>]
                    :
                    [<Button key={1} color="inherit" href="/bookmarked-articles">My bookmarks</Button>,
                    <Button key={2} color="inherit" href="/logout">Logout</Button>]}
                  </div>
            </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/bookmarked-articles">
            <BookmarkedArticles setLoggedInState={setLoggedInState}/>
          </Route>
          <Route path="/logout">
            <Login setLoggedInState={setLoggedInState}/>
          </Route>
          <Route path="/login">
            <Login setLoggedInState={setLoggedInState}/>
          </Route>
          <Route path="/signup">
            <SignUpUser setLoggedInState={setLoggedInState}/>
          </Route>
          <Route path="/">
            <Homepage loggedInState={loggedInState} />
          </Route> 
        </Switch>
      </Router>
      {/* <div className="footer"> 
        <p className="footer-padding">© 2021 Copyright: Roost News<br/>All rights reserved</p>
      </div> */}
    </div>
  )
}

var classes = {
  logo: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "55%",
    maxHeight: "70%"
  },
  logoCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  navLinks: {
    marginLeft: "auto",
  }
};


export default App;


