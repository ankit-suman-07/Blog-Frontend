import React, {useContext} from 'react'
import "./BlogPostComp.css"

import { BlogContext } from '../../context/BlogContext';

const BlogPostComp = ({blog}) => {
    const { imgEndpoint } = useContext(BlogContext);
  
  return (
    <div className='blog-post'>
        <div>
            {blog.image && <img src={`${imgEndpoint}${blog.image}`} alt={blog.topic} className='blog-post-img' />}
        </div>
        {blog.topic}
        {blog.id}
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
