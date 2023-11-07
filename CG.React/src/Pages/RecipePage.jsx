import React, { useEffect, useState } from "react";
import Header from "../RecipeComponents/Header";
import SecondHeader from "../RecipeComponents/SecondHeader";
import TableHeader from "../RecipeComponents/TableHeader";
import RecipeList from "../RecipeComponents/RecipeList";
import "../css/style.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://localhost:7226/api/Recipes");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      throw new Error("Er ging iets mis met het ophalen van api/Recipes");
    }
  };

  useEffect(() => {
    console.log("Data wordt opgehaald");
    fetchRecipes();
  }, []);

  return (
    <div>
      <Header />
      <SecondHeader />
      <TableHeader />
      <RecipeList recipes={recipes} /> {/* Geef de lijst met recepten door aan RecipeList */}
    </div>
  );
};

export default Recipe;
