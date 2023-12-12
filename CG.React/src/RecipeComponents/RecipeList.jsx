import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://localhost:7226/api/Recipe");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      throw new Error("Er ging iets mis met het ophalen van api/Recipe");
    }
  };

  useEffect(() => {
    console.log("Data wordt opgehaald");
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
