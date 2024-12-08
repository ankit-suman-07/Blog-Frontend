import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  // Initialize state with localStorage data or default values
  const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('searchTerm') || "");
  const [filterTerm, setFilterTerm] = useState(() => JSON.parse(localStorage.getItem('filterTerm')) || []);
  const [limit, setLimit] = useState(() => parseInt(localStorage.getItem('limit')) || 10);
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = 'https://blog-backend-axna.onrender.com/api/blogs';
  const imgEndpoint = 'https://blog-backend-axna.onrender.com';

  // Save updated state values to localStorage
  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('filterTerm', JSON.stringify(filterTerm));
  }, [filterTerm]);

  useEffect(() => {
    localStorage.setItem('limit', limit);
  }, [limit]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Fetch data based on current search/filter/limit
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(endpoint, {
          params: { query: searchTerm, filter: filterTerm, page: 1, limit },
        });
        setData(response.data.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, filterTerm, limit]);

  return (
    <BlogContext.Provider
      value={{
        imgEndpoint,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        searchTerm,
        setSearchTerm,
        filterTerm,
        setFilterTerm,
        limit,
        setLimit,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
