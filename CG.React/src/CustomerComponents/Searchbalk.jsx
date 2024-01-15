import React from 'react';
import stylecss from '../css/searchbalk.module.css'; // Importeer de CSS-module-stijlen

const Searchbalk = () => {
  return (
    <div className={stylecss['search-container']}>
      <input type="text" placeholder="Zoeken..." className={stylecss['search-input']} />
      <button className={stylecss['search-button']}>Zoeken</button>
    </div>
  );
};

export default Searchbalk;
