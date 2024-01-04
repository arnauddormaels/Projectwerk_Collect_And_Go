import React, { useEffect, useState } from "react";
import Header from "../RecipeComponents/Header";
import SecondHeader from "../RecipeComponents/SecondHeader";
import TableHeader from "../RecipeComponents/TableHeader";
import RecipeList from "../RecipeComponents/RecipeList";
import "../css/style.css";
import NavigationBar from "../RecipeComponents/NavigationBar";

const Recipe = () => {
  
  return (
    <div>
      <NavigationBar />
      <Header />
      <SecondHeader />
      <TableHeader />
      <RecipeList /> { /*recipes={recipes}*/ /* Geef de lijst met recepten door aan RecipeList */}
    </div>
  );
};

export default Recipe;
