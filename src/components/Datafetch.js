import React from 'react';
import axios from 'axios';

function Datafetch() {
  const handleApiCall = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react:keyes&key=AIzaSyAX8QcZI5ZTmoU-AnCwrjlBGZ48Ivwz_wA"    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <button onClick={handleApiCall}>Make API Call</button>
    </div>
  );
}

export default Datafetch;
