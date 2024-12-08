import React, { useState, useContext } from 'react';
import './SearchFilter.css';
import FilterIcon from "../../assets/filter.png";
import SearchIcon from "../../assets/search.png";
import { BlogContext } from '../../context/BlogContext';

const SearchFilter = () => {
    const { theme, toggleTheme } = useContext(BlogContext);
    const [inputValue, setInputValue] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to show/hide the dropdown
    const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCategoryClick = (category) => {
        // Toggle category selection
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter(item => item !== category); // Deselect category
            } else {
                return [...prevSelectedCategories, category]; // Select category
            }
        });
    };

    const handleClearBtn = () => {
        setSelectedCategories([]); // Clear all selected categories
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
                    {categories.map((category) => (
                        <div
                            key={category}
                            className={`dropdown-item ${selectedCategories.includes(category) ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                            {selectedCategories.includes(category) && <span className="checkmark">✔</span>}
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
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter search term..."
                />
                <img src={SearchIcon} alt='search-icon' />
            </div>
        </div>
    );
};

export default SearchFilter;
