//import React from 'react'

const Recipe = () => {



    const fetchRecipes = async () => {
        const response = await fetch("https://localhost:7226/api/Recipes");//de 1 op het einde is de id en moet aangepast kunnen worden met een variable de 1 is dummy data
        return response.json();
    }
    const data = fetchRecipes();
  return (
    <div>
        <div>Recipe</div>
        <p>{data}</p>
    </div>
  )
}

export default Recipe