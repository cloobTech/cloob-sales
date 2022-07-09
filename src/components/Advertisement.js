/** @format */

import React from "react";
import url from "../assets/advert.jpg";

function Advertisement({src, bigText, smallText, spanText}) {
  return (
    <div className="advertisement">
      <div>
        <img src={src} alt="" />
      </div>
      <div className="advertisement__text">
        <div className="advertisement__big__text" >
          {bigText} <span>{ spanText}</span> 
        </div>
        <div className="advertisement__small__text">
          {smallText}
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
