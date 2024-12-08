import React from 'react'
import NavComponent from '../../components/nav-bar/NavComponent'
import Footer from '../../components/footer/Footer'
import "./About.css"

const About = () => {
  return (
    <div className='main-area'>
      <NavComponent />
      <main></main>
      <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default About
