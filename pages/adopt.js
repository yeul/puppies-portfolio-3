import React, { Fragment } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

import main from "../styles/main.scss";

class Adopt extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='cta container-fluid'>
          <Nav />
          <div className='row no-gutters'>
            <div className='adopt col-lg-12'>
              <h1 className='adopt-donate'>ADOPT & DONATE!</h1>
              <div className='aspca-link'>Please visit the ASPCA link below to find an adoptable pet in your area!</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              You can also visit The Humane Society of the United States website to find out how you can donate to animals in need.
            </div>
          </div>
          <div className='org-logos row no-gutters'>
            <Link href='https://www.aspca.org/adopt-pet/adoptable-dogs-your-local-shelter#petfocus_0=&page_0=7&breed_0=&sex_0=&distance_0=25&location_0=21157&action_0=search'>
              <a target='_blank'>
                <img src='../static/images/aspca-logo.png' className='aspca-logo' />
              </a>
            </Link>
            <Link href='https://www.humanesociety.org/'>
              <a target='_blank'>
                <img src='../static/images/humanesociety.png' className='humane-society-logo' />
              </a>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Adopt;
