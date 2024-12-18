import React, { useContext } from 'react';
import SearchFilter from '../../components/search-filter/SearchFilter';

import MainImage from '../../assets/main-pic.png';
import './Home.css';

import NavComponent from '../../components/nav-bar/NavComponent';
import BlogPostComp from '../../components/blog-post/BlogPostComp';
import Footer from '../../components/footer/Footer';

import { BlogContext } from '../../context/BlogContext';

const Home = () => {
  const { data, limit, setLimit } = useContext(BlogContext);

  const handlePagination = () => {
    setLimit(limit+10)
  }

  return (
    <div className="main-area">
      <NavComponent />

      <main>
        <section className="hero">
          <img src={MainImage} alt="Main hoarding showcasing blog content" />
          <span>Everything Tech at your FingerTip</span>
        </section>
        <section className="search-section">
          <SearchFilter />
        </section>
        <section className="blogs">
          {data && data.length > 0 ? (
            data.map((item) => <BlogPostComp key={item.id} blog={item} />)
          ) : (
            <p>Loading.....</p>
          )}
        </section>
        <section className="pagination" onClick={handlePagination} >
          More <span>▼</span>
        </section>
      </main>

      <footer>
       <Footer/>
      </footer>
    </div>
  );
};

export default Home;
