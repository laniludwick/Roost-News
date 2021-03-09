// ***** Homepage component for Roost News used on landing page *****

import React from 'react';
import Headline from './Headline';
import { CardColumns} from 'react-bootstrap';

function Homepage () {

  const [headlineData, setHeadlineData] = React.useState("");
  const [headlineList, setHeadlineList] = React.useState([]);
  
  React.useEffect(() => {
    fetch ('http://localhost:9000/newsAPI', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
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
        date={value.publishedAt}
        content={value.content}
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
      <h2>News stories</h2>
        <div>
          <CardColumns>{headlineList.length > 0? headlineList : null }</CardColumns>
        </div>
    </div>
  )
}

export default Homepage;