// PopupComponent.js
import React, { useState, useEffect } from 'react';
import '../css/Popup.css';

const PopupComponent = ({ handleClose, imgUrl, videoUrl, recipeName }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [localRecipeName, setLocalRecipeName] = useState(recipeName);
  const [localVideoUrl, setLocalVideoUrl] = useState(videoUrl);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Voer hier je effecten uit als dat nodig is
  }, []);

  const handleInternalClose = () => {
    setIsPopupVisible(false);
    handleClose();
  };

  const handleRecipeNameChange = (event) => {
    setLocalRecipeName(event.target.value);
  };

  const handleRecipeUrlChange = (event) => {
    setLocalVideoUrl(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };

  if (!isPopupVisible) {
    return null;
  }

  return (
    <div className="popup-background">
      <div className="popup-container card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Recept</h3>

          <div className="close-container">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleInternalClose}
              style={{ fontSize: "24px" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div className="card-body">
          <form id="recipeForm" onSubmit={(event)=>{
        console.log("Submit event: ", event.target.formData);               //id + submit toegevoegd, arnaud
        event.preventDefault();                                             //Anders gaat de pagina helemaal refreshen en zo de console.log niet afbeelden, arnaud
    }} >
            <div className="form-group">
              <div className="row">
                <div className="col-name">
                  <p className="colnametext">Afbeelding</p>
                </div>
                <div className="colpicture">
                  <img src={imgUrl} alt="Afbeelding beschrijving" />
                </div>
              </div>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                id="activeCheck"
                className="form-check-input"
                checked={isActive}
                onChange={handleCheckboxChange}
              />

              <label htmlFor="activeCheck" className="form-check-label">
                Actief
              </label>
            </div>

            <div>
              <div className="form-group row mb-3 align-items-center">
                <label
                  htmlFor="recipeName"
                  className="col-md-3 col-form-label d-flex justify-content-between"
                >
                  <span>Naam recept</span>
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="recipeName"
                    value={localRecipeName}
                    onChange={handleRecipeNameChange}
                  />
                </div>
              </div>

              <div className="form-group row mb-3 align-items-center">
                <label htmlFor="recipeUrl" className="col-md-3 col-form-label">
                  URL
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="recipeUrl"
                    value={localVideoUrl}
                    onChange={handleRecipeUrlChange}
                  />
                </div>
              </div>
            </div>

            <div className="popup-actions text-center">
              <button
              type="submit"                                 /*Submit van gemaakt ipv button, nu luisterd de form naar deze submit button, arnaud*/
                //type="button"
                className="btn btn-primary"
                onClick={handleInternalClose}
              >
                OPSLAAN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};




export default PopupComponent;
//Event handler maken, arnaud/*
/*const recipeForm = document.querySelector("#recipeForm");
recipeForm.addEventListener("onsubmit", addRecipe);

const addRecipe = (event) => {
const recipeData = event.formData;
console.log(recipeData);
}*/