import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div id='nav-bar'>
      <span>
        <Link href='/'>
          <a>Start Here</a>
        </Link>
      </span>
      <span>
        <Link href='/'>
          <a>About</a>
        </Link>
      </span>
      <span>
        <Link href='/'>
          <a>Contact</a>
        </Link>
      </span>
    </div>
  );
};

export default Nav;
