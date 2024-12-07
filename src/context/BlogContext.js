import React, { createContext, useState } from 'react';

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BlogContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BlogContext.Provider>
  );
};
