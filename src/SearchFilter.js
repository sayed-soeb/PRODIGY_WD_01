import React, { useState } from 'react';
import './Styles/Search.css';

function SearchFilter({ onSearch }) {
  const [searchFilters, setSearchFilters] = useState({
    original_launch: '',
    status: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    onSearch(searchFilters);
  };

  return (
    <div className="filter">
      <div className="contain">
      <h2>Search Filters</h2>
      <div className="top-row">
        <input
          type="text"
          name="status"
          placeholder="Search by Status"
          value={searchFilters.status}
          onChange={handleChange}
        />
        <input
          type="text"
          name="original_launch"
          placeholder="Search by original_launch"
          value={searchFilters.original_launch}
          onChange={handleChange}
        />
         <input
          type="text"
          name="type"
          placeholder="Search by Type"
          value={searchFilters.type}
          onChange={handleChange}
        />
      </div>
      <div className="bottom-row">
       
        <button onClick={handleSearch}>Search</button>
      </div>
      </div>
    </div>
  );
}

export default SearchFilter;
