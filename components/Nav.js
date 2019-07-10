import React from "react";
import Link from "next/link";

import Start from "../pages/adopt";

class Nav extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div id='nav-bar'>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/adopt'>
              <a>Adopt & Donate</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
