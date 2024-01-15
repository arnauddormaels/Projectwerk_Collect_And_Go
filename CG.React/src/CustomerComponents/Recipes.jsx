import React, { useEffect, useState } from 'react';
import VideoPlayer from '../Videoscreen/Videoplayer';
import styles from '../css/Customer.module.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://localhost:7226/api/Recipe/getActiveRecipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Er ging iets mis met het ophalen van de recepten", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imagerow}>
          {recipes.map((recipe, index) => (
            <div
              key={recipe.recipeId}
              className={styles.imageContainer}
              onClick={() => handleRecipeClick(recipe)}
            >
              <img src={recipe.imgUrl} alt={recipe.name} />
              <p className={styles.imageText}>{recipe.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedRecipe && (
        <VideoPlayer selectedRecipe={selectedRecipe} />
      )}

      <div className={styles.footer} style={{ margin: '100px' }} />
    </div>
  );
};

export default Recipes;
