import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
const [recipeListRefresher, setRecipeListRefresher] = useState(true);
  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://localhost:7226/api/Recipe"); //returned array
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    } catch (error) {
      throw new Error("Er ging iets mis met het ophalen van api/Recipe");
    }
  };

  useEffect(() => {
    console.log("Data wordt opgehaald");
    fetchRecipes();
  }, [recipeListRefresher]);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.recipeId} recipe={recipe} setRecipeListRefresher={setRecipeListRefresher} />
      ))}
    </div>
  );
};

export default RecipeList;
