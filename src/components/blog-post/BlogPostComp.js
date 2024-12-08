import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

import "./BlogPostComp.css"

import { BlogContext } from '../../context/BlogContext';

const BlogPostComp = ({blog}) => {
  const { imgEndpoint, searchTerm } = useContext(BlogContext);

  const titleHighlight = (title) => {
    if (!searchTerm) return title;
  
    const parts = title.split(new RegExp(`(${searchTerm})`, 'gi'));
  
    return parts.map((part, index) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return (
          <span key={index} style={{ backgroundColor: '#44c3d0', padding: '0 2px' }}>
            {part}
          </span>
        );
      }
  
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

export default BlogPostComp
