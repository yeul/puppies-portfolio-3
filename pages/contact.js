import React, { Fragment } from "react";
import Link from "next/link";

import Nav from "../components/Nav";

import main from "../styles/main.scss";

const Contact = () => {
  return (
    <Fragment>
      <div className='contact container-fluid'>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <Nav />
            <h1>🐶 Good Puppers Portfolio Site 🐶</h1>
            <div className='row no-gutters'>
              <div className='col-lg-12'>
                <div>For more of my work:</div>
                <div>
                  <Link href='https://github.com/yeul'>
                    <a target='_blank'>Github</a>
                  </Link>
                </div>
                <div>Get in Touch:</div>
                <div>Email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
