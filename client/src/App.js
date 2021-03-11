// ***** App component for Roost News *****

import './App.css';
import React from 'react';
import Homepage from './Homepage';
import SignUpUser from './Signup';
import Login from './Login';
import ArticleDetails from './ArticleDetails';
import BookmarkedArticles from './BookmarkedArticles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  
  const [loggedInState, setLoggedInState] = React.useState(false); 

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Roost News</Nav.Link>
          </Nav>
          <Nav>
            {loggedInState !== true? 
            [<Nav.Link key={1} href="/signup">SignUpUser</Nav.Link>,
            <Nav.Link key={2} href="/login">Login</Nav.Link>]
            :
            [<Nav.Link key={1} href="/bookmarked-articles/:userId">My bookmarks</Nav.Link>,
            <Nav.Link key={2} href="/logout">Logout</Nav.Link>]}
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/bookmarked-articles">
            <BookmarkedArticles loggedInState={loggedInState}/>
          </Route>
          <Route path = "/article-details">
            <ArticleDetails loggedInState={loggedInState}/>
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
      <div className="footer"> 
        <p className="footer-padding">© 2021 Copyright: Roost News<br/>All rights reserved</p>
      </div>
    </div>
  )
}

export default App;


