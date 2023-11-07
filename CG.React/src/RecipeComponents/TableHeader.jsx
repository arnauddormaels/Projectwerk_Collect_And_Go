import React from "react";


const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
