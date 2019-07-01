import React from "react";

const Button = props => {
  return (
    <button className='main-info-button btn-primary' type='button'>
      {props.buttonName}
    </button>
  );
};

export default Button;
