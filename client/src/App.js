// ***** App component for Roost News *****

import './App.css';
import React from 'react';
import Homepage from './Homepage';
import SignUpUser from './Signup';
import Login from './Login';
// import ArticleHeadline from './ArticleHeadline';
// import ArticleDetails from './ArticleDetails';
// import Bookmarks from './Bookmarks';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
  // const loggedInStatus = localStorage.getItem('user')? true : false;
  // LoggedInStatus === true ? [Link to logout, Link to Saved articles] : [Link to Login, Link to Signup]

function App() {


  // const [apiResponse, setApiResponse] = React.useState("");  

  // fetch("http://localhost:9000/signup")
  //   .then(res => res.text())
  //   .then(data => setApiResponse(data))
  //   .catch(err => err);

  return (
    <div className="App">
      <p>Hello world!</p>
      <Router>
      {/* <AppBar>
          <Toolbar>  */}
            <Link to="/">Roost News</Link>

            [<Link to="/signup">SignUpUser</Link>,
            <Link to="/login">Login</Link>]

            [<Link to="/bookmarks">My bookmarks</Link>,
            <Link to="/logout">Logout</Link>]
          {/* </Toolbar> 
        </AppBar> */}
        <Switch>
          {/* <Route path="/bookmarks" component={Bookmarks}>
          </Route>
          <Route path="/article-details/:articleId" component={ArticleDetails}>
          </Route>*/}
          <Route path="/login" component={Login}>
          </Route> 
          <Route path="/signup" component={SignUpUser}>
          </Route>
          <Route path="/" component={Homepage}>
          </Route> 
        </Switch>
      </Router>
      <div> 
        <p>© 2021 Copyright: Roost News<br/>All rights reserved <br/>By: Lani Ludwick</p>
      </div>
      {/* <p>{apiResponse}</p> */}
    </div>
  )
}

export default App;


