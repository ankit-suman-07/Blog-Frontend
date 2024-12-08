import React from 'react'
import NavComponent from '../../components/nav-bar/NavComponent'
import Footer from '../../components/footer/Footer'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="main-area">
      <NavComponent />
      <main>
        <section className='demo-text' >
          Contact Us
        </section>
        </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default Contact
