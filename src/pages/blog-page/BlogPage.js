import React from 'react'
import "./BlogPage.css"

import NavComponent from '../../components/nav-bar/NavComponent'
import Footer from '../../components/footer/Footer'

// import { BlogContext } from '../../context/BlogContext';

const BlogPage = ({blog}) => {
    // const { imgEndpoint } = useContext(BlogContext);
  
  return (
    <div className="main-area">
      <NavComponent />
      <main>

      </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default BlogPage
