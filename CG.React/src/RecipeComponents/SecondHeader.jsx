import React from "react";


const SecondHeader = () => {
  return (
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
  );
};

export default SecondHeader;
