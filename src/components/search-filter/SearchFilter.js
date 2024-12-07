import React, {useState, useContext} from 'react'
import "./SearchFilter.css"
import FilterIcon from "../../assets/filter.png";
import SearchIcon from "../../assets/search.png";

import { BlogContext } from '../../context/BlogContext';

const SearchFilter = () => {
    const { theme, toggleTheme } = useContext(BlogContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <div className='search-filter'>
        <div className='filter' >
            <img src={FilterIcon} alt='filter-icon' />
            <span>Categories</span>
        </div>
        <div className='search' >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter search term..."
            />
            <img src={SearchIcon} alt='search-icon' />
        </div>
              
    </div>
  )
}

export default SearchFilter
