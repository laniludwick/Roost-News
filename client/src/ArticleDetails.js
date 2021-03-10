
import { useParams } from 'react-router-dom';

function ArticleDetails (props) {
  // const {articleId} = useParams();
  //show props.title
  //show props.image (sizing?)
  //show props.content
  //view full article props.url
  //if loggedinstate is true, show bookmark button.
  //Show email button regardless of logged in state, email url.
  return (
    <h2> in article details component {props.content}</h2>
  )
}

export default ArticleDetails

