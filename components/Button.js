import React from "react";

import "../styles/main.scss";

const Button = props => {
  return (
    <div className='button-container'>
      <div className={`learn-more-btn ${props.className}`}>Learn More</div>
    </div>
  );
};

export default Button;
