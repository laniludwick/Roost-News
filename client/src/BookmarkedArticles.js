// ***** BookmarkedArticles component for Roost News  *****

import React from 'react';
import Headline from './Headline';
import { Grid } from '@material-ui/core';

function BookmarkedArticles (props) {
  // const {articleId} = useParams();
  props.setLoggedInState(true);
  const [bookmarkData, setBookmarkData] = React.useState("");
  const [bookmarkList, setBookmarkList] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/bookmarked-articles')
    .then(response => response.json())
    .then(data => {

      setBookmarkData(data);
    }) 
  }, []); 

  //Bookmarked articles  
  React.useEffect(()=> {
    if (bookmarkData !== "") {
    const bookmarkComponents = [];
    console.log("Bookmark data object:", bookmarkData);
    for (let [key, value] of Object.entries(bookmarkData)) {
      console.log("Key value of bookmark data in loop:", [key, value]);
      console.log("value.url:", value.url);
      const bookmarkComponent = <Headline 
      key={value.id}
      id={value.id}
      author={value.author}
      title={value.title}
      description={value.articleDescription}
      url={value.articleURL}
      urlToImage={value.urlToImg}
      bookmarked={true}
      />
      bookmarkComponents.push(bookmarkComponent);
      console.log("bookmarkComponents list in loop:", bookmarkComponents);
    }
    setBookmarkList(bookmarkComponents);  
    }
  },[bookmarkData]);    
  
  return (
    <div>
      <div><br/>
        <Grid container justify="center">
          {bookmarkList.length > 0? bookmarkList : null }
        </Grid>
      </div>
    </div>
  )
}

export default BookmarkedArticles
