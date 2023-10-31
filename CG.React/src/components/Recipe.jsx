import { useEffect, useState } from "react";
import React from "react";

//import React from 'react'

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try{
    const response = await fetch("https://localhost:7226/api/Recipes");
    const data = await response.json();
    setRecipes(data);
    }catch(error){
      throw new Error("Er ging iets mis met bij het fetchen van api/Recipes").
    }
  };

  useEffect(() => {
    console.log("Data wordt opgehaald");
    fetchRecipes();
  }, []); //momenteel wordt er enkel bij het opstarten van de site alle gegevens opgevraagd
  return (
    <div>
          {/* <!--  begin van thematitel  --> */}

<div className="container mt-4">
  <div className="row">
    <div className="col-lg-11 main-content">
      <p>Video Shopping</p>
    </div>
  </div>
</div>

{/* <!--  einde van thematitel  --> */}

{/* <!--  begin van titel en knoppen  --> */}

<div className="shopping">
  <div className="container mt-4">
    <div className="row">
      <div className="col-lg-5 RECIPE">
        <p className="recipe">Recipes</p>
      </div>
      <div className="col-lg-6 ADD_RECIPY">
        <button className="addrecipe">+ Add new recipe</button>
      </div>
      <div className="col-lg-1 right-sidebar"></div>
    </div>
  </div>
</div>

{/* <!-- einde  van titel en knoppen  --> */}

      {/*<!-- begin alle woorden boven de recepten -->*/}

<div className="texttopper">
  <div className="container mt-4">
    <div className="row">
      <div className="col-lg-1 Image">
        <p className="Image">Picture</p>
      </div>
      <div className="col-lg-3 Name">
        <p className="Name">Name</p>
      </div>
      <div className="col-lg-1 Actif">
        <p className="Actif">Active</p>
      </div>
      <div className="col-lg-4 URL">
        <p className="URL">URL</p>
      </div>
      <div className="col-lg-1 Clock">
        <p className="Clock"></p>
      </div>
      <div className="col-lg-1 Pencil">
        <p className="Pencil"></p>
      </div>
      <div className="col-lg-1 Remove">
        <p className="Remove"></p>
      </div>
    </div>
  </div>
</div>

{/*<!-- einde alle woorden boven de recepten -->*/}
      
      <div>
{/*HIER GEBEURT HET MAPPEN VAN DE DATA */}
        {recipes.map((recipe) => {
          const { recipeId, name, imgUrl, videoUrl, isActive = true } = recipe;
          return (
            <React.Fragment key={recipeId}>
              <div className="GreyBox">
                
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-1 Image1">
                      <img
                        /*src="src\img\chocoladetaart.jpg"                     //Waarschijnlijk gaan we hier een fetch moeten doen naar {imgUrl}
                        alt="Chocoladetaart"
                        style="max-width: 60px; max-height: 50px"*/
                      />
                    </div>
                    <div className="col-lg-3 Name">
                      <p className="dishname">{name}</p> 
                    </div>
                    <div className="col-lg-1 Symbol">                             
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="col-lg-3 URL1">
                      <a href="your_url">{videoUrl}</a>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 Symbol button1">
                        {/*<!-- Specifieke klasse voor de eerste knop --> */}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="col-lg-1 Symbol button2">
                        {/*<!-- Specifieke klasse voor de tweede knop -->*/}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          ></path>
                        </svg>
                      </div>
                      <div className="col-lg-1 Symbol button3">
                        {/*<!-- Specifieke klasse voor de derde knop -->*/}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      {/*<!-- Lege kolom voor wit ruimte rechts -->}*/}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
