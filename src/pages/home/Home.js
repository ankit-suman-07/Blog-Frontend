import React from 'react'
import SearchFilter from '../../components/search-filter/SearchFilter'

import MainImage from "../../assets/main-pic.png"
import SearchIcon from "../../assets/search.png"
import FilterIcon from "../../assets/filter.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='main-area'>
        <main>
            <section className='hero' >
              <img src={MainImage} alt='main-hoarding' />
            </section>
            <section className='search-section' >
              <SearchFilter />
            </section>
            <section className='blogs' >

            </section>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Home
