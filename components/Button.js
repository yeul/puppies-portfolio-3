import React from "react";

const Button = props => {
  return (
    <button className='page-button btn-primary' type='button'>
      {props.button}
    </button>
  );
};

export default Button;
