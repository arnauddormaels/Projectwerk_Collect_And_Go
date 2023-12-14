import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimingsPage from './Pages/TimingsPage.jsx';
import RecipePage from './Pages/RecipePage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipePage />} />
      <Route path="/timings/:id" element={<TimingsPage/>} />
      {/* Add more Route components here as needed */}
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
