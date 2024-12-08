import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import BlogPage from './pages/blog-page/BlogPage';

import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <div className="App"> 
    <BlogProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
      </BlogProvider>
    </div>
  );
}

export default App;
