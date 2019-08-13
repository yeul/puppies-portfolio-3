import React from "react";
import Link from "next/link";

const Button = props => {
  return (
    <Link href='/profile'>
      <a>
        <div className='main-info-button btn-primary' type='button'>
          {props.buttonName}
        </div>
      </a>
    </Link>
  );
};

export default Button;
