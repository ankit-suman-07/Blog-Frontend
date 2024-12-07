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
  };
  
  export default DataFetcher;