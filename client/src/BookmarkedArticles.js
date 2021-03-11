// ***** BookmarkedArticles component for Roost News  *****

import React from 'react';
import Headline from './Headline';
import { CardColumns} from 'react-bootstrap';

function BookmarkedArticles (props) {
  // const {articleId} = useParams();
  
  const [bookmarkData, setBookmarkData] = React.useState("");
  const [bookmarkList, setBookmarkList] = React.useState([]);

  React.useEffect(() => {
    fetch('/bookmarked-articles')
    .then(response => response.json())
    .then(data => {

      setBookmarkData(data);
    }) 
  }, []); 

  //Bookmarked cards  
  React.useEffect(()=> {
    if (bookmarkData !== "") {
    const bookmarkComponents = [];
    for (let [key, value] of Object.entries(bookmarkData)) {
        console.log([key, value]);
        
        const bookmarkComponent = <Headline 
        key={value.url}
        author={value.author}
        title={value.title}
        description={value.description}
        url={value.url}
        urlToImage={value.urlToImage}
        date={value.publishedAt}
        content={value.content}
        />
        bookmarkComponents.push(bookmarkComponent);
        console.log("bookmarkComponents list in loop:", bookmarkComponents);
      }
      setBookmarkList(bookmarkComponents);  
      }
  },[bookmarkData]);    
  
  return (
    <div>
    <h2>My Bookmarked Articles</h2>
      <div>
        <CardColumns>{bookmarkList.length > 0? bookmarkList : null }</CardColumns>
      </div>
  </div>
  )
}

export default BookmarkedArticles
