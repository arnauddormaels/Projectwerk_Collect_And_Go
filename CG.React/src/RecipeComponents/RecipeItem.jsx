import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup/RecipePopup";
import Axios from "axios";
import axios from "axios";

const RecipeItem = ({ recipe, setRecipeListRefresher }) => {
  const navigate = useNavigate();
  const {
    recipeId,
    name,
    imgUrl,
    videoUrl,
    isActive = true,
    category,
  } = recipe;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState("");
  const [isActiveValue, setIsActiveValue] = useState(isActive);

  // Functie om naar de "/timings" pagina te navigeren
  const handleTimingButtonClick = () => {
    navigate(`/timings/${recipeId}`);
  };
  const HandleIsActiveClick = () => {
    axios.put(`https://localhost:7226/api/Recipe/isActive/(${recipeId})`); //Er is nog iets mis
    setIsActiveValue(!isActiveValue);
    console.log(`Is Active value = ${isActiveValue}`);
  };
  const handleClickRemove = async () => {
    const confirmRemove = window.confirm(
      "Ben je zeker dat je dit wilt verwijderen?"
    );
    if (confirmRemove) {
      console.log("removing recipe with id " + recipeId);
      await Axios.delete(`https://localhost:7226/api/Recipe/${recipeId}`);
      console.log("recipe removed");
      setRecipeListRefresher((refresher) => !refresher);
    } else {
      console.log("Er is niet verwijderd.");
    }
  };
  const togglePopup = (imgUrl) => {
    setSelectedImgUrl(imgUrl);
    setShowPopup(!showPopup);
  };
  return (
    <React.Fragment key={recipeId}>
      <div className="GreyBox">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-1 Image1">
              <img
                src={imgUrl}
                alt={name}
                style={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-lg-3 Name">
              <p className="dishname">{name}</p>
            </div>
            <div className="col-lg-1 Symbol ">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    HandleIsActiveClick();
                  }}
                />
                <span
                  className={`slider round ${
                    isActiveValue ? "bg-primary" : "bg-secondary"
                  }`}
                ></span>
              </label>
            </div>
            <div className="col-lg-3 URL1">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ width: "25px", height: "25px", color: "#007BFC" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </a>
            </div>
            <div className="row">
              <div className="col-lg-1 Symbol button1">
                <button
                  className="icon-button"
                  onClick={handleTimingButtonClick}
                >
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
                </button>
              </div>
              <div className="col-lg-1 Symbol button2">
                <button
                  className="icon-button"
                  onClick={() => togglePopup(imgUrl)}
                >
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
                </button>
              </div>
              <div className="col-lg-1 Symbol button3">
                <button className="icon-button" onClick={handleClickRemove}>
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
                </button>
              </div>
            </div>
            <div className="col-lg-1">
              {/* Lege kolom voor witte ruimte rechts */}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup
          id={recipeId}
          imgUrl={selectedImgUrl}
          videoUrl={videoUrl}
          recipeName={name}
          isActive={isActive}
          category={category}
          setRecipeListRefresher={setRecipeListRefresher}
          //onCheckboxChange={onCheckboxChange}           /*wordt momenteel (nog) niet gebruik, arnaud*/
        />
      )}
    </React.Fragment>
  );
};

export default RecipeItem;
