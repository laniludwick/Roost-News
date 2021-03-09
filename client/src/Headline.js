// ***** Homepage component for Roost News used on landing page *****

import { CardColumns, Card, Button } from 'react-bootstrap';

// //import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });
  

function Headline (props) {
  
  // const classes = useStyles();

  return (
  <div>

      <Card>
        <Card.Img variant="top" src={props.urlToImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <button><i className="far fa-newspaper"></i></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg></button>
          <button><i className="far fa-bookmark"></i></button>
          <button><i className="far fa-envelope"></i></button>
        </Card.Body>
      </Card>
  </div>
  )
} 

export default Headline

// Bootstrap
// <i class="bi bi-bookmark"></i>

{/* <i class="far fa-bookmark"></i> f02e regular
<i class="fas fa-bookmark"></i> f02e solid
f0e0<i class="far fa-envelope"></i>
<i class="fas fa-envelope"></i>
<i class="far fa-newspaper"></i>f1ea */}
{/* <i class="fa fa-camera-retro fa-2x"></i> fa-2x */}