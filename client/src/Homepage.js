// ***** Homepage component for Roost News used on landing page *****

import React from 'react';
// import ArticleHeadline from './ArticleHeadline';

function Homepage () {

  // const [headlineList, setHeadlineList] = React.useState([]);
  
  // React.useEffect(() => {
  //   fetch ('/api/headlines', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(articles => {
  //     setHeadlineList(articles);
  //   })
  // }, []);

  return (
    <div>
      <h2>News stories</h2>
      <h2>Homepage component</h2>
      <h2>Homepage component</h2>

      {/* {headlineList.map(article => 
        <ArticleHeadline 
          key={article.source}
          newsSource={article.name}
          author={article.author}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          date={article.publishedAt}
          content={article.content}
        />
      )} */}
    </div>
  )
}

export default Homepage