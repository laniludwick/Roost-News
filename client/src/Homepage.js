// ***** Homepage component for Roost News used on landing page *****

import React from 'react';
import Headline from './Headline';
import { CardColumns } from 'react-bootstrap';
import { Grid } from '@material-ui/core';

function Homepage (props) {

  const [headlineData, setHeadlineData] = React.useState("");
  const [headlineList, setHeadlineList] = React.useState([]);
  
  React.useEffect(() => {
    fetch ('/api/newsAPI')
    .then(response => response.json())
    
    .then(headlines => {
      console.log("headlines from fetch:", headlines);
      setHeadlineData(headlines);
    })
  }, []);
  
  console.log("headlineData:", headlineData);
  console.log("headlineData articles:", headlineData.articles);

  React.useEffect(()=> {
  if (headlineData !== "") {
    const headlineComponents = [];
    for (let [key, value] of Object.entries(headlineData.articles)) {
        console.log([key, value]);
        console.log("author", value.author)
        
        const headlineComponent = <Headline 
        key={value.url}
        author={value.author}
        title={value.title}
        description={value.description}
        url={value.url}
        urlToImage={value.urlToImage}
        loggedInState={props.loggedInState}
        // date={value.publishedAt}
        // content={value.content}
        />
        headlineComponents.push(headlineComponent);
        console.log("headlineComponents list in loop:", headlineComponents);
      }
      setHeadlineList(headlineComponents);  
      }
  },[headlineData]);    

  console.log("headlineList:", headlineList);
  return (
    <div>
      <div><br/>
        <Grid container justify="center">
          {headlineList.length > 0? headlineList : null }
        </Grid>
      </div>
    </div>
  )
}

export default Homepage;