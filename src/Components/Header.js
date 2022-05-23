import React from "react";
import A from "../img/abcProduct.svg";
import B from "../img/hrclogo.svg";

export default function Header() {
  return (
    <div className="images">
      <div className="B">
        <img  src={A} alt="image1"></img>
      </div>
      <div className="B">
        <img src={B} alt="image2"></img>
      </div>
      <div className="bred"></div>
    </div>
  );
}