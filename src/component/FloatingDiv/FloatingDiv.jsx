import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({image, txt1, txt2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  );
};

export default FloatinDiv;