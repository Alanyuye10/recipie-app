import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, selectRecipe } from '../features/recipes/recipesSlice';
import Pagination from './Pagination';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { filteredRecipes, loading, currentPage, recipesPerPage } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) return <div className="text-center text-gray-500 font-medium">Loading...</div>;

  // Calculate the recipes to display
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      {/* Grid layout with three rows and three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
            onClick={() => dispatch(selectRecipe(recipe))}
          >
            <h1 className="text-sm font-bold text-orange-800">{recipe.name}</h1>
             {/* Recipe Image */}
            <img
              src={recipe.image} // Use the image field from the API response
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <p className="text-sm text-orange-600">{recipe.cuisine}</p>
          </div>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default RecipeList;
