import React from "react";
import { Link } from "react-router-dom";

export default function racipeCard(props) {
  return (
    <div className="col-auto mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img alt="food" src={props.img} className="card-img-top" />
        <div className="card-body" style={{color:"black"}}>
          <h5 className="card-title">{props.label}</h5>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row ">
              <p className="card-text">calories :</p>
              <p>{props.calories}</p>
            </div>

            <div className="d-flex flex-row ">
              <p className="card-text">Ingredients :</p>
              <p>{props.ingredients}</p>
            </div>
          </div>
          <Link
            to={{ pathname: "/details", state: props.data }}
            className="btn btn-primary"
          >
            Full Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
