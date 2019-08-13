import React, { Fragment } from "react";
import Link from "next/link";

import "../styles/main.scss";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='nav-container container-fluid'>
          <div className='nav-row row no-gutters'>
            <div className='nav-col-left col-lg-5'>
              <Link href='/'>
                <a className={`${this.props.currentPage}`}>
                  <h1 className='site-title'>topdogs</h1>
                </a>
              </Link>
            </div>
            <div className='nav-col-right col-lg-7'>
              <div className='navLinks'>
                <ul className='nav-ul'>
                  <Link href='/adopt'>
                    <a className={`${this.props.currentPage}`}>
                      <li className={`adopt-donate-link ${this.props.navBtn}`}>Adopt & Donate</li>
                    </a>
                  </Link>
                  <li>
                    <a href='mailto:juliamfurman@gmail.com' className={`${this.props.currentPage}`}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/yeul/portfolio-3' target='_blank' className={`${this.props.currentPage}`}>
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;
