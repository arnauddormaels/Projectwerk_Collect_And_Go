import React, { useEffect, useState } from 'react';
import styles from '../css/Customer.module.css';

const Recipelist = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const maxRecipesPerRow = 4; // Maximum aantal recepten per rij

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://localhost:7226/api/Recipe");
        const data = await response.json();

        // Willekeurige volgorde toepassen op de recepten
        const randomizedRecipes = shuffleArray(data);
        setRandomRecipes(randomizedRecipes);
      } catch (error) {
        throw new Error("Er ging iets mis met het ophalen van api/Recipe");
      }
    };

    fetchRecipes();
  }, []);

  // Functie om een array willekeurig te sorteren
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div>
        
      <div className={styles.container}>
        <div className={styles.imagerow}>
          {randomRecipes.map((recipe, index) => (
            <div key={recipe.recipeId} className={styles.imageContainer}>
              <img src={recipe.imgUrl} alt={recipe.name} />
              <p className={styles.imageText}>{recipe.name}</p>
              {(index + 1) % maxRecipesPerRow === 0 && (
                <div className={styles.clear}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer} style={{ margin: '100px' }} />
    </div>
  );
};

export default Recipelist;
