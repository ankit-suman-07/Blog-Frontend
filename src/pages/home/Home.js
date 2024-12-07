import React from 'react'
import MainImage from "../../assets/main-pic.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='main-area'>
        <main>
            <section className='hero' >
              <img src={MainImage} alt='main-hoarding' />
            </section>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Home
