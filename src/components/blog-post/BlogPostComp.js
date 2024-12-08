import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

import "./BlogPostComp.css"

import { BlogContext } from '../../context/BlogContext';

const BlogPostComp = ({blog}) => {
  const { imgEndpoint, searchTerm } = useContext(BlogContext);

  const titleHighlight = (title) => {
    if (!searchTerm) return title; // If no search term, return title as is
  
    // Use a regular expression to split but retain spaces
    const parts = title.split(new RegExp(`(${searchTerm})`, 'gi'));
  
    return parts.map((part, index) => {
      // Check if part matches the search term (case-insensitively)
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return (
          <span key={index} style={{ backgroundColor: '#44c3d0', padding: '0 2px' }}>
            {part}
          </span>
        );
      }
  
      // Preserve other parts (including spaces)
      return <span key={index}>{part}</span>;
    });
  };
  
  
  return (
    <div className='blog-post'>
        {blog.image && <img src={`${imgEndpoint}${blog.image}`} alt={blog.topic} className='blog-post-img' />}
        <div className='blog-topic' >
          {titleHighlight(blog.topic)}
        </div>
        <div className='blog-category' >
          {blog.category}
        </div>
        <Link to="/blogpage" className='blog-text' >
          <div className='blog-text-inner' >
          {blog.text}
          </div>
        </Link>
    </div>
  )
}

 // <li key={item.id}>
          //   <h3>{item.topic}</h3>
          //   <p>{item.text}</p>
          //   <p><strong>Category:</strong> {item.category}</p>
          //   <p><strong>Author:</strong> {item.author}</p>
          //   {/* Render the image if available */}
          //   {item.image && <img src={`${imgEndpoint}${item.image}`} alt={item.topic} width="200" />}
          // </li>

export default BlogPostComp
