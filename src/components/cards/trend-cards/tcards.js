import React from "react";

const Tcards = (props) => {
  return (
    <div className="tcard">
      <img src={props.cardimg} alt="" />
      <h3>{props.head}</h3>
      <p>{props.year}</p>
      <div className="tcard-rat">
        <div className="tc-rating">
          <i class="fa fa-star" style={{ color: "#FFD43B" }}></i>
          <p>{props.rating}</p>
        </div>
        <div className="tc-fav">
          <i class="fa fa-solid fa-eye" style={{ color: "grey" }}></i>
          <i class="fa fa-solid fa-heart" style={{ color: "red" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Tcards;
