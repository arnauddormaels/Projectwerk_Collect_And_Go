import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimingsPage from './Pages/TimingsPage.jsx';
import RecipePage from './Pages/RecipePage.jsx';
import CustomerPage from './Pages/CustomerPage.jsx';
import CustomerRecipes from './Pages/CustomerRecipes.jsx';
import Recipes from './CustomerComponents/Recipes.jsx'; // Importeer de aangepaste Recipes-component
import VideoPlayer from './Videoscreen/Videoplayer'; // Importeer de aangepaste VideoPlayer-component

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipePage />} />
      <Route path="/timings/:id" element={<TimingsPage />} />
      <Route path='/customer' element={<CustomerPage />} />
      <Route path='/customerabout' element={<VideoPlayer />} /> {/* Gebruik VideoPlayer voor /customerabout */}
      <Route path='/customerrecipes' element={<CustomerRecipes />} />
      <Route path='/recipes/:recipeId' element={<Recipes />} /> {/* Voeg deze route toe */}
      {/* Voeg meer Route-components hier toe zoals nodig */}
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
