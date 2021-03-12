// ***** App component for Roost News *****

import './App.css';
import React from 'react';
import Homepage from './Homepage';
import SignUpUser from './Signup';
import Login from './Login';
import RoostNewsLogo from './RoostNewsLogo.png';
import ArticleDetails from './ArticleDetails';
import BookmarkedArticles from './BookmarkedArticles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, AppBar, Toolbar, Link, Typography, Button, makeStyles, IconButton } from '@material-ui/core';

function App() {
  
  const [loggedInState, setLoggedInState] = React.useState(false); 
  const classes = useStyles();

  return (
    <div className="classes.root">
      <Router>
        <AppBar position="static" color="transparent">
          <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <Link href="/" color="inherit">
                    <img src={RoostNewsLogo} width="270px" height="40px" className="center"/>
                  </Link>
                </Typography>
                {loggedInState !== true? 
                [<Button color="inherit" href="/signup">Sign Up</Button>,
                <Button color="inherit" href="/login">Login</Button>]
                :
                [<Button color="inherit" href="/bookmarked-articles">My bookmarks</Button>,
                <Button color="inherit" href="/logout">Logout</Button>]}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/bookmarked-articles">
            <BookmarkedArticles loggedInState={loggedInState}/>
          </Route>
          {/* <Route path = "/article-details">
            <ArticleDetails loggedInState={loggedInState}/>
          </Route>  */}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // style:{ 
  // width: '100%',
  // }
}));


export default App;


