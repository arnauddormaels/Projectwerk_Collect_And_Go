import React, {useState} from "react";
import Popup from "../Popup/TimingPopup";

const SecondHeader = (recipeId) => {
  const [showPopup, setShowPopup] = useState(false);            {/*useState toegevoegd, arnaud*/}

  return (
    <React.Fragment>                                {/*wijziging arnaud}*/}
    <div className="shopping">
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-5 RECIPE">
          <p className="recipe">Timings</p>
        </div>
        <div className="col-lg-6 ADD_RECIPY">
          <button className="addrecipe" onClick = {() =>setShowPopup(!showPopup)}>+ Add new timing</button>
        </div>
        <div className="col-lg-1 right-sidebar"></div>
      </div>
    </div>
  </div>
  {showPopup && ( //Create new recipe button                                                                       /*popupToeveogd, arnaud*/
    <Popup
    recipeId={recipeId.recipeId}
    />
  )}
  </React.Fragment>
  )
}

export default SecondHeader