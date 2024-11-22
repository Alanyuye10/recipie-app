// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container mx-auto p-6">
          <SearchBar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RecipeList />
            </div>
            <div>
              <RecipeDetail />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
