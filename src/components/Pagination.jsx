// src/components/Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../features/recipes/recipesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { filteredRecipes, currentPage, recipesPerPage } = useSelector((state) => state.recipes);

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        className="px-4 py-2 bg-orange-300 text-gray-800 rounded-lg hover:bg-orange-400 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 rounded-lg ${
            currentPage === index + 1
              ? 'bg-black text-white border border-orange-500'
              : 'bg-gray-300 text-gray-800 hover:bg-orange-200'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 bg-orange-300 text-gray-800 rounded-lg hover:bg-orange-400 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
