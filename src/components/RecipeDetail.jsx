// src/components/RecipeDetail.js
import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetail = () => {
  const { selectedRecipe } = useSelector((state) => state.recipes);

  if (!selectedRecipe)
    return <div className=" bg-white rounded-lg text-gray-500 p-1 italic">Select a recipe to view details.</div>;

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">{selectedRecipe.name}</h2>
      <p className="mb-2">
        <strong className="text-orange-500">Cuisine:</strong> {selectedRecipe.cuisine}
      </p>
      <p className="mb-2">
        <strong className="text-orange-500">Ingredients:</strong>{' '}
        {selectedRecipe.ingredients.join(', ')}
      </p>
      <p>
        <strong className="text-orange-500">Instructions:</strong> {selectedRecipe.instructions}
      </p>
    </div>
  );
};

export default RecipeDetail;
