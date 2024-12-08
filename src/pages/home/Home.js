import React, {useContext, useEffect, useState} from 'react'
import SearchFilter from '../../components/search-filter/SearchFilter'

import MainImage from "../../assets/main-pic.png"
import SearchIcon from "../../assets/search.png"
import FilterIcon from "../../assets/filter.png"
import "./Home.css"

import NavComponent from '../../components/nav-bar/NavComponent'

import { BlogContext } from '../../context/BlogContext'

const Home = () => {
  const { imgEndpoint, data, setData } = useContext(BlogContext);

  // const [compData, setCompData] = useState([]);

  // useEffect(() => {
  //   setCompData(data);
  //   console.log(compData)
  // }, [data]); 
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
            <ul>
        {data && data.map((item) => (
          <li key={item.id}>
            <h3>{item.topic}</h3>
            <p>{item.text}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Author:</strong> {item.author}</p>
            {/* Render the image if available */}
            {item.image && <img src={`${imgEndpoint}${item.image}`} alt={item.topic} width="200" />}
          </li>
        ))}
      </ul>
            </section>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Home
