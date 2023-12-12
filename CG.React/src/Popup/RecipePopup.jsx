// PopupComponent.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Popup.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Axios from "axios";

//Yup Schema toegevoegd ,arnaud
const todoValidationSchema = Yup.object().shape({                                                  
  recipeName : Yup.string().required("Recept naam is een verpicht veldje"),                                    
  isActive: Yup.boolean(),
  imgUrl: Yup.string().required(),
  videoUrl : Yup.string().required(),
  /*TODO Validatie voor categorie moet nog gebeuren.*/
});  

const PopupComponent = ({ id, imgUrl = "src/img/no-image-icon.png", videoUrl, recipeName, isActive = false, category = "Voorgerecht"}) => {
  

 // const [imgUrlState,setImgUrl] = useState("src/img/no-image-icon.png");
  const [isPopupVisible, setIsPopupVisible] = useState(true);
//  const [localRecipeName, setLocalRecipeName] = useState(recipeName);
//  const [localVideoUrl, setLocalVideoUrl] = useState(videoUrl);
// const [isActive, setIsActive] = useState(false);
const navigate =  useNavigate();

  useEffect(() => {
    // Voer hier je effecten uit als dat nodig is

  }, [isPopupVisible]);

  const handleInternalClose = () => {
    setIsPopupVisible(false);



    navigate("/");
    console.log("navigate to /")
    //handleClose();
  };

  const formik = useFormik({
    initialValues: {
      recipeName: recipeName,
      category: category,
      imgUrl: imgUrl,
      videoUrl: videoUrl,
      isActive: isActive,
    },
    onSubmit: () => {
      const recipe = {            
        name: formik.values.recipeName,
        category: formik.values.category,
        imgUrl: formik.values.imgUrl,
        videoUrl: formik.values.videoUrl,
        isActive: formik.values.isActive,
      };
      console.log(recipe);
      if (id === undefined) {       
        console.log("recipe met id : " + id  + "wordt toegevoegd");
        const response = Axios.post(
          "https://localhost:7226/api/Recipe",
          recipe
        );
        console.log("nieuwe recipe wordt aangemaakt")
        console.log(response); //In console log is dit de promise
      } else {
        console.log("recipe met id : " + id  + " wordt gewijzigd");

        const response = Axios.put(
          `https://localhost:7226/api/Recipe/(${id})`,
          recipe
        );
        console.log(`Recipe met id ${id} is gewijzigd`);
        console.log(response);
      }
      handleInternalClose();
    },
    validateOnChange: false, //default op true, nu gaat hij enkel valideren als je op submit duwt en niet bij elke keer dat je typt
    validationSchema: todoValidationSchema, //Het validatie schema meegeven aan formik
  });

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
          <form id="recipeForm" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col-name">
                  <p className="colnametext">Afbeelding</p>
                </div>
                <div className="colpicture">
                  <img
                    src={formik.values.imgUrl}
                    onChange={formik.handleChange}
                    alt="Afbeelding beschrijving"
                  />
                </div>
              </div>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                id="isActive"
                className="form-check-input"
                checked={formik.values.isActive}
                onChange={formik.handleChange}
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
                    value={formik.values.recipeName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row mb-3 align-items-center">
                <label className="col-md-3 col-form-label d-flex justify-content-between">
                  {" "}
                  {/*htmlFor="category"*/}
                  <span>Category</span>
                </label>
                <div className="col-md-9">
                  {/*<input
                    type="tel"
                    className="form-control"
                    id="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    />*/}
                  <select
                  className="form-control"
                    name="category"
                    id="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  >
                    <option value="Voorgerecht">Voorgerecht</option>
                    <option value="Hoofdgerecht">Hoofdgerecht</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </div>
              </div>
              <div className="form-group row mb-3 align-items-center">
                <label className="col-md-3 col-form-label d-flex justify-content-between">
                  
                  {/*htmlFor="imgUrl"*/}
                  <span>Img URL</span>
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="imgUrl"
                    value={formik.values.imgUrl}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row mb-3 align-items-center">
                <label htmlFor="recipeUrl" className="col-md-3 col-form-label">
                  video URL
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="videoUrl"
                    value={formik.values.videoUrl}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="popup-actions text-center">
              <button
                type="submit" /*Submit van gemaakt ipv button, nu luisterd de form naar deze submit button, arnaud*/
                //type="button"
                className="btn btn-primary"
                //onClick={handleInternalClose}
                onClick={() => console.log(formik.errors)}
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