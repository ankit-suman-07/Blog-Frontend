import React, { useState, useContext } from 'react';
import './SearchFilter.css';
import FilterIcon from "../../assets/filter.png";
import SearchIcon from "../../assets/search.png";
import { BlogContext } from '../../context/BlogContext';

const SearchFilter = () => {
    const { searchTerm, setSearchTerm, filterTerm, setFilterTerm } = useContext(BlogContext);
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to show/hide the dropdown


    const handleCategoryClick = (filter) => {
        // Toggle filter selection
        setFilterTerm((prevFilterTerm) => {
            if (prevFilterTerm.includes(filter)) {
                return prevFilterTerm.filter(item => item !== filter); // Deselect filter
            } else {
                return [...prevFilterTerm, filter]; // Select filter
            }
        });
    };

    const handleClearBtn = () => {
        setFilterTerm([]); // Clear all selected categories
        setDropdownVisible(false); // Close the dropdown
    };

    const categories = ['Technology', 'Health', 'Business', 'Lifestyle', 'Education'];

    return (
        <div className='search-filter'>
            <div className='filter'>
                <img src={FilterIcon} alt='filter-icon' onClick={() => setDropdownVisible(!dropdownVisible)} />
                <span onClick={() => setDropdownVisible(!dropdownVisible)} >Categories</span>
                {/* Dropdown menu for categories */}
            {dropdownVisible && (
                <div className="dropdown">
                    {categories.map((filter) => (
                        <div
                            key={filter}
                            className={`dropdown-item ${filterTerm.includes(filter) ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(filter)}
                        >
                            {filter}
                            {filterTerm.includes(filter) && <span className="checkmark">✔</span>}
                        </div>
                    ))}
                    <div>
                    <button onClick={() => setDropdownVisible(!dropdownVisible)} >Apply</button>
                    <button onClick={handleClearBtn} >Clear</button>
                    </div>
                    
                </div>
            )}
            </div>
            
            <div className='search'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Enter search term..."
                />
                <img src={SearchIcon} alt='search-icon' />
            </div>
            {searchTerm}
        </div>
    );
};

export default SearchFilter;
