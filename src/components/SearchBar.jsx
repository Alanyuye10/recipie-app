// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCuisine } from '../features/recipes/recipesSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(filterByCuisine(event.target.value));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by cuisine"
        className="p-1 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
