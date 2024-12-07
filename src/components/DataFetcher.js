import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  // State to store the data, loading state, and error message
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the endpoint URL
  const endpoint = 'https://blog-backend-axna.onrender.com/api/blogs';
  const imgEndpoint = 'https://blog-backend-axna.onrender.com';

  // UseEffect hook to make the API request when the component mounts
  useEffect(() => {
    

    // Make the GET request using axios
    axios.get(endpoint)
      .then((response) => {
        setData(response.data.blogs);  // Store the response data
        setLoading(false);        // Set loading state to false
        console.log(response.data.blogs);
      })
      .catch((error) => {
        setError(error.message);  // Set error if the request fails
        setLoading(false);        // Set loading state to false
      });
  }, []);  // Empty dependency array to run once on component mount

  // Render the component based on the loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>
            <h3>{item.topic}</h3>
            <p>{item.text}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Author:</strong> {item.author}</p>
            {/* Render the image if available */}
            {item.image && <img src={`${imgEndpoint}${item.image}`} alt={item.topic} width="200" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;