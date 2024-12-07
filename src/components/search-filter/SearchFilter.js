import React, {useState} from 'react'
import "./SearchFilter.css"
import FilterIcon from "../../assets/filter.png";
import SearchIcon from "../../assets/search.png";

const SearchFilter = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the state with the current input value
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
                value={inputValue} // Bind the input value to state
                onChange={handleInputChange} // Call the update function on change
                placeholder="Enter search term..."
            />
            <img src={SearchIcon} alt='search-icon' />
        </div>
              
    </div>
  )
}

export default SearchFilter
