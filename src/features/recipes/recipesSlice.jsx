// src/features/recipes/recipesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch recipes asynchronously
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await axios.get('https://dummyjson.com/recipes');
  return response.data.recipes;
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    filteredRecipes: [],
    selectedRecipe: null,
    currentPage: 1,
    recipesPerPage: 6,
    loading: false,
    error: null,
  },
  reducers: {
    filterByCuisine: (state, action) => {
      state.filteredRecipes = state.recipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.currentPage = 1;
    },
    selectRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
        state.filteredRecipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterByCuisine, selectRecipe, setCurrentPage } = recipesSlice.actions;
export default recipesSlice.reducer;
