// ***** Homepage component for Roost News used on landing page *****

import ArticleDetails from './ArticleDetails';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Headline (props) {
  
  const linkToDetails = {
    pathname: "/article-details",
    articleId: props.url
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

    // fetch ('/api/bookmark'
    fetch ("http://localhost:9000/bookmark", {
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
        //Change color of bookmark icon to solid dark
      } else {
        console.log("Error", data);
        //should handle case where bookmark is already saved
      }
    })
    .catch(err => err);
  }

  return (
  <div>
    <Container>
      <Card>
        <Card.Img variant="top" src={props.urlToImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          {/* <Button onClick={showArticleDetails}>View details</Button> */}
          <Link key={1} to={linkToDetails} className="btn btn-primary" >View details</Link> 
          {props.loggedInState===true?
          <Button onClick={bookmarkArticle}>Bookmark</Button>:null} 
          {/* <button><i className="far fa-bookmark"></i></button> */}
          <Button>Email article</Button>
        </Card.Body>
      </Card>
    </Container>
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

{/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
<path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
<path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg></button>

<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg></button> */}