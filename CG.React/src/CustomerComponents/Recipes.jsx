import React, { useEffect, useState } from 'react';
import VideoPlayer from '..Videoscreen/Videoplayer'; // Importeer de VideoPlayer-component
import styles from '../css/Customer.module.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Houd het geselecteerde gerecht bij

  const maxRecipesPerRow = 4;
  const maxRecipesToShow = 4;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://localhost:7226/api/Recipe/getActiveRecipes");
        const data = await response.json();

        const limitedRecipes = data.slice(0, maxRecipesToShow);
        setRecipes(limitedRecipes);
      } catch (error) {
        throw new Error("Er ging iets mis met het ophalen van api/Recipe/getActiveRecipes");
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Wanneer er op een gerecht wordt geklikt, stel het geselecteerde gerecht in
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imagerow}>
          {recipes.map((recipe, index) => (
            <div
              key={recipe.recipeId}
              className={styles.imageContainer}
              onClick={() => handleRecipeClick(recipe)} // Voeg een click handler toe om het geselecteerde gerecht in te stellen
            >
              <img src={recipe.imgUrl} alt={recipe.name} />
              <p className={styles.imageText}>{recipe.name}</p>
              {index % maxRecipesPerRow === maxRecipesPerRow - 1 && (
                <div className={styles.clear}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedRecipe && (
        <VideoPlayer selectedRecipe={selectedRecipe} /> // Als er een geselecteerd gerecht is, geef het door aan de VideoPlayer-component
      )}

      <div className={styles.footer} style={{ margin: '100px' }} />
    </div>
  );
};

export default Recipes;
