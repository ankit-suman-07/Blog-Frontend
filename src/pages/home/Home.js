import React, {useContext} from 'react'
import SearchFilter from '../../components/search-filter/SearchFilter'

import MainImage from "../../assets/main-pic.png"
import "./Home.css"

import NavComponent from '../../components/nav-bar/NavComponent'
import BlogPostComp from '../../components/blog-post/BlogPostComp'

import { BlogContext } from '../../context/BlogContext'

const Home = () => {
  const { data } = useContext(BlogContext);

  return (
    <div className='main-area'>
      <nav>
      <NavComponent />
      </nav>
      
        <main>
            <section className='hero' >
              <img src={MainImage} alt='main-hoarding' />
            </section>
            <section className='search-section' >
              <SearchFilter />
            </section>
            <section className='blogs' >
              {data && data.map((item) => (
                <BlogPostComp key={item.id}  blog={item} />
              ))}
            </section>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Home
