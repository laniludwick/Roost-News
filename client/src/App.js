import './App.css';
import React from 'react';

function App() {
  
  const [apiResponse, setApiResponse] = React.useState("");  

  fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(data => setApiResponse(data))
    .catch(err => err);

  return (
    <div className="App">
      <p>Hello world!</p>
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
