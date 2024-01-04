/* eslint-disable react/prop-types */
import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Popup from "../Popup/TimingPopup";

const TimingItem = ({ recipeId, timing, setTimingsListRefresher }) => {
  const { timingId, startTime, endTime, product } = timing;
  const { productId,name: productName, imgUrl: productImgUrl, brandProduct } = product;
  const { name: brandProductName, imgUrl: brandImgUrl } = brandProduct; //description,price, deze fields niet nodig
  const [showPopup, setShowPopup] = useState(false);

  const handleClickRemove = async() => {
    const confirmRemove = window.confirm(
      "Ben je zeker dat je dit wilt verwijderen?"
    );
    if (confirmRemove) {
      console.log("removing timing with id " + timing.timingId);

     await Axios.delete(`https://localhost:7226/api/Timing/${timing.timingId}`);
      console.log("timing removed");
      setTimingsListRefresher((refresher) => !refresher);
    } else {
      console.log("Er is niets verwijderd.");
    }
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <React.Fragment key={timingId}>
      <div className="GreyBox">
        <div className="container mt-4">
          <div className="row ">
            <div className="col-lg-1 Image1">
              <img
                src={productImgUrl}
                alt={productName}
                style={{ maxWidth: "50px", maxHeight: "50px" }}
              />
            </div>
            <div className="col-lg-1 Name">
              <p className="dishname">{productName}</p>
            </div>
            <div className="col-lg-1 Symbol arrow">
              {/* SVG icon kan hier */}
            </div>
            <div className="col-lg-1 Image2" style={{ textAlign: "center" }}>
              <img
                src={brandImgUrl}
                alt={brandProductName}
                style={{
                  maxWidth: "40px",
                  maxHeight: "50px",
                  display: "block",
                  margin: "0 auto",
                  marginLeft: "42px",
                }}
              />
            </div>
            <div className="col-lg-1 Name">
              <p className="Merkboost">{brandProductName}</p>
            </div>
            <div className="col-lg-1 Name">
              <p className="Begintime">{startTime}</p>
            </div>
            <div className="col-lg-1 Name">
              <p className="Line">-</p>
            </div>
            <div className="col-lg-1 Name">
              <p className="Endtime">{endTime}</p>
            </div>
            <div className="col-lg-1 Symbol pencil">
              <button className="icon-button" onClick={() => togglePopup()}>
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
              <button
                className="icon-button"
                onClick={() => handleClickRemove()}
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup
          recipeId={recipeId}
          timingId={timing.timingId}
          startTime={timing.startTime}
          endTime={timing.endTime}
          productId={productId}
          product={product}
          setTimingsListRefresher={setTimingsListRefresher}
        />


      )}
    </React.Fragment>
  );
};

export default TimingItem;
