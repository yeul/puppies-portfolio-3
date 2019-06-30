import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div id='nav-bar'>
      <span>
        <Link href='/'>
          <a>I am the top navbar.</a>
        </Link>
      </span>
      <span>
        <Link href='/'>
          <a>About</a>
        </Link>
      </span>
      <span>
        <Link href='/'>
          <a>History</a>
        </Link>
      </span>
    </div>
  );
};

export default Nav;
