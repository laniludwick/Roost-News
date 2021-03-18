// ***** Homepage component for Roost News used on landing page *****

import React from 'react';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'; 
import { Grid, Button, Link, makeStyles, IconButton } from '@material-ui/core';
import { Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const emailJSUserId = process.env.REACT_APP_EMAILJS_USER_ID;
const emailJSServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailJSTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

init(emailJSUserId);

function Headline (props) {
  
  const [bookmarked, setBookmarked] = React.useState(false);
  const [recipientFname, setRecipientFname] = React.useState("");
  const [recipientEmail, setRecipientEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);

  const emailArticle = (evt) => {
    evt.preventDefault();
    console.log("Inside emailArticle function")
    setOpenDialog(false);
    
    const templateParams = {
      recipientFname: recipientFname,
      recipientEmail: recipientEmail,
      userName: userName,
      articleURL: props.url
  };

    emailjs.send(emailJSServiceId, emailJSTemplateId, templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
  }

  const handleClose = () => {
    setOpenDialog(false);
  }

  const removeBookmark = () => {
    console.log("Inside removeBookmark function");
    setBookmarked(false);
  }

  const bookmarkAlert = () => {
    alert("Please log in to bookmark articles");
  }

  const bookmarkArticle = () => {
    
    const bookmarkData = {
      "author":props.author,
      "title":props.title,
      "description":props.description,
      "url":props.url,
      "urlToImage":props.urlToImage,
      "date":props.publishedAt,
      "content":props.content,
    }

    console.log("bookmark data", bookmarkData);

    fetch ("/api/bookmark", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(bookmarkData),
    })
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
      if (data === '{"success": result}') {
        
        alert("Article has been saved to your account as a bookmark.");
        console.log("bookmarked state pre set:", bookmarked);
        setBookmarked(true);
        console.log("bookmarked state, post set:", bookmarked);
      } else {
        console.log("Error", data);
        //should handle case where bookmark is already saved
      }
    })
    .catch(err => err);
  }
  const classes = useStyles();
  return (
  <div>
    <Grid item >
    <Card className={classes.root}>
    <Link href={props.url}> 
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.urlToImage}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" href={props.url}>
          View Article
        </Button>
        <IconButton onClick={()=>setOpenDialog(true)}>
          <MailOutlineIcon size="small" color="primary"/>
        </IconButton>
        <Dialog open={openDialog}>
          <DialogTitle>Email this article</DialogTitle>  
          <DialogContent>
            <form action="/" onSubmit={emailArticle}>
              <TextField name="sender-name" value={userName} label="Your full name" fullWidth onChange={evt => setUserName(evt.target.value)} required={true}/>
              <TextField name="recipient-fname" value={recipientFname} label="Recipient's first name" fullWidth onChange={evt => setRecipientFname(evt.target.value)} required={true}/>
              <TextField name="recipient-email" value={recipientEmail} label="Recipient's email address" fullWidth onChange={evt => setRecipientEmail(evt.target.value)} required={true} type="email"/>
              <div><br/>
                <Button className={classes.sendEmail} variant="contained" type="submit" label="Submit">Send</Button>
                <Button className={classes.cancelEmail} variant="outlined" label="Cancel" onClick={handleClose}>Cancel</Button>
              </div>
            </form><br/> 
          </DialogContent>
        </Dialog>       
        { props.loggedInState? 
            bookmarked ?  
              [<IconButton key={1} onClick={removeBookmark}>
                <BookmarkIcon size="small" color="primary"/>
              </IconButton>] 
              :
              [<IconButton key={1} onClick={bookmarkArticle}>
                <BookmarkBorderIcon size="small" color="primary"/>
              </IconButton>]
            : 
            [<IconButton key={1} onClick={bookmarkAlert}>
              <BookmarkBorderIcon size="small" className={classes.loggedOutBookmark}/>
            </IconButton>]
        }
      </CardActions>
    </Card><br/>
    </Grid>
  </div>
  )
} 

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: 10,
  },
  media: {
    height: 250,
  },
  sendEmail: {
    background: 'linear-gradient(45deg, #336600 30%, #59b300 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 40,
    color: 'white',
    padding: '0 20px',
  },
  cancelEmail: {
    background: 'white',
    border: '1px',
    borderRadius: 3,
    height: 40,
    padding: '0 20px',
  },
  loggedOutBookmark: {
    color: 'gray'
  }

});


export default Headline
