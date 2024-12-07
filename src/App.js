import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NavComponent from './components/nav-bar/NavComponent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <NavComponent />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
