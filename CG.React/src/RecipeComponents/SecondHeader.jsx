import React, {useState} from "react";
import Popup from "../Popup/Popup";

const SecondHeader = () => {
  const [showPopup, setShowPopup] = useState(false);            {/*useState toegevoegd, arnaud*/}

  return (
    <React.Fragment>                                {/*wijziging arnaud}*/}
    <div className="shopping">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-5 RECIPE">
            <p className="recipe">Recipes</p>
          </div>
          <div className="col-lg-6 ADD_RECIPY" >
            <button className="addrecipe" onClick = {() => setShowPopup(!showPopup)}>+ Add new recipe</button>         {/*onclick toegevoegd, arnaud*/}
          </div>
          <div className="col-lg-1 right-sidebar"></div>
        </div>
      </div>
    </div>
  
  {showPopup && (                                                                        /*popupToeveogd, arnaud*/
    <Popup
    //Hier moeten er sws nog dingen veranderen voor de handleClose()(onClose)
    //IsActive & onCheckboxChange worden volgens mij ook niet gebruikt in de props van Popup, In de button van Recipelist worden deze ook meegegeven maar ik weet waar niet deze gebruikt worden, arnaud
    /*onClose={togglePopup}*/
    imgUrl={""}
    videoUrl={""}
    recipeName={""}
    isActive={false}
    /*onCheckboxChange={onCheckboxChange}*/
    />
  )}
  </React.Fragment>
  );
};

export default SecondHeader;
