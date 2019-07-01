import React from "react";
import Link from "next/link";

import Start from "../pages/start";

const Nav = () => {
  return (
    <div id='nav-bar'>
      <ul>
        <li>
          <Link href='/start'>
            <a>Start Here</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
