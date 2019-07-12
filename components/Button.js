import React from "react";
import Link from "next/link";

const Button = props => {
  return (
    <Link href='/profile'>
      <a>
        <button className='main-info-button btn-primary' type='button'>
          {props.buttonName}
        </button>
      </a>
    </Link>
  );
};

export default Button;
