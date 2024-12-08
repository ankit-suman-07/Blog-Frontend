import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState([]);
  const [limit, setLimit] = useState(10);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = 'https://blog-backend-axna.onrender.com/api/blogs';
  const imgEndpoint = 'https://blog-backend-axna.onrender.com';



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before the fetch
      setError(null);   // Clear any previous errors
      try {
        const response = await axios.get(endpoint, {
          params: { query: searchTerm, filter: filterTerm, page: 1, limit },
        });
        setData(response.data.blogs); // Update the context with the fetched data
      } catch (error) {
        setError(error.message); // Handle and store the error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    console.log(data);
    fetchData(); // Call the async fetch function
  }, [data, filterTerm, limit, searchTerm]);

  return (
    <BlogContext.Provider value={{ imgEndpoint, data, setData, loading, setLoading, 
                                    error, setError, searchTerm, setSearchTerm, filterTerm, setFilterTerm,
                                    limit, setLimit }}>
      {children}
    </BlogContext.Provider>
  );
};
