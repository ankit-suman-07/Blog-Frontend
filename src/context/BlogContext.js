import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [pagination, setPagination] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = 'https://blog-backend-axna.onrender.com/api/blogs';
  const imgEndpoint = 'https://blog-backend-axna.onrender.com';
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before the fetch
      setError(null);   // Clear any previous errors
      try {
        const response = await axios.get(endpoint);
        setData(response.data.blogs); // Update the context with the fetched data
      } catch (error) {
        setError(error.message); // Handle and store the error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    console.log(data);
    fetchData(); // Call the async fetch function
  }, []);

  return (
    <BlogContext.Provider value={{ imgEndpoint, data, setData }}>
      {children}
    </BlogContext.Provider>
  );
};
