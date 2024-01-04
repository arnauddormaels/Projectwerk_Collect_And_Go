// PopupComponent.js
import { useState, useEffect } from "react";
import "../css/Popup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const todoValidationSchema = Yup.object().shape({
 /* recipeId: Yup.number().required(),
  productId: Yup.string().required(
    "Please select a product, productId is empty"
  ),
  fromField: Yup.string().required(),
  untilField: Yup.string().required(),*/
  /*TODO Validatie voor categorie moet nog gebeuren.*/
});


const TimingPopup = ({ recipeId, timingId =0, startTime,endTime,productId,product, setTimingsListRefresher }) => {
  
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [ products , setProducts] = useState([]); 
   
  const handleInternalClose = () => {
    setIsPopupVisible(false);
    setTimingsListRefresher((refresher) => !refresher);
  };

  const formik = useFormik({
    initialValues: {
      recipeId: recipeId,
      timingId: timingId,
      productId: productId,
      startTime: startTime,
      endTime: endTime,
      product : product

    },
    onSubmit: async () => {
      const timing = {
        recipeId: formik.values.recipeId,
        timingId:formik.values.timingId,
        productId: formik.values.productId,
        startTime: formik.values.startTime,
        endTime: formik.values.endTime,
        product: formik.values.product//selectedProduct
      };
      console.log(timing);
      if (timingId == 0) {
        await addTiming(timing);
      } else {
        await updateTiming(timing);
      }
      handleInternalClose();
    },
    validateOnChange: false, //default op true, nu gaat hij enkel valideren als je op submit duwt en niet bij elke keer dat je typt
    validationSchema: todoValidationSchema, //Het validatie schema meegeven aan formik
  });

  const addTiming = async (timing) =>{
    console.log("nieuwe timing word toegeoegd");
    console.log(timing);
    const response = await Axios.post(
      `https://localhost:7226/api/Timing?recipeId=${recipeId}`,
      timing
    );
    console.log("nieuwe timing wordt aangemaakt");
    console.log(response); //In console log is dit de promise
  }

  const updateTiming = async (timing) => {
    console.log("timing met id : " + timing.timingIdId + " wordt gewijzigd");

    const response = await Axios.put(
      `https://localhost:7226/api/Timing/${timing.timingId}`,
      timing
    );
    console.log(`timing met id ${timing.timingId} is gewijzigd`);
    console.log(response);
  };
  const fetchproducts = async() => {
    try{
    console.log("Fetching products");
    const response = await fetch("https://localhost:7226/api/Product");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    const data = await response.json();
    setProducts(data);
    }catch(error){
        console.error("Er ging iets mis met het ophalen van de brandProducts", error);
    }
}
const handleProductSelected = async (event) => {
  formik.values.productId = event.target.value;
    formik.values.product =  products.find(product => product.productId == event.target.value);
    console.log(formik.values.product);
    //setSelectedProduct(product);
   // console.log(selectedProduct);
}
useEffect(() => {
    fetchproducts();
}, [isPopupVisible]);
if (!isPopupVisible) {
  return null;
}
  return (
    <div className="popup-background">
      <div className="popup-container card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Timing</h3>

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
            <div>
              <div className="form-group row mb-3 align-items-center">
                <label className="col-md-3 col-form-label d-flex justify-content-between">
                  {" "}
                  {/*htmlFor="category"*/}
                  <span>Product</span>
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control"
                    name="productId"
                    id="productId"
                    value={formik.values.productId}
                    onChange={(event) => {
                      formik.handleChange;
                      handleProductSelected(event);
                    }}
                  >
                    {products.map((product) => (
                      <option key={product.productId} value={product.productId}>
                        {" "}
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group row mb-3 align-items-center">
              <label
                htmlFor="startTime"
                className="col-md-3 col-form-label d-flex justify-content-between"
              >
                <span>From</span>
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="startTime"
                  value={formik.values.startTime}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="form-group row mb-3 align-items-center">
              <label
                htmlFor="endTime"
                className="col-md-3 col-form-label d-flex justify-content-between"
              >
                <span>Until</span>
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="endTime"
                  value={formik.values.endTime}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* <div className="container mt-4">
              <div className="row ">
                <div className="col-lg-1 Image1">
                  <img
                    src={formik.values.product.imgUrl}
                    alt={formik.values.product.name}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </div>
              </div>
            </div> */}

            <div className="popup-actions text-center">
              <button
                type="submit" /*Submit van gemaakt ipv button, nu luisterd de form naar deze submit button, arnaud*/
                className="btn btn-primary"
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

export default TimingPopup;
