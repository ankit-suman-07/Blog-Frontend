import React, { createContext, useState } from 'react';

// Create the context
export const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BlogContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BlogContext.Provider>
  );
};
