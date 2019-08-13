import React, { Fragment } from "react";
import Nav from "../components/Nav";

import "../styles/main.scss";

class Adopt extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav currentPage='adopt' navBtn='adopt-nav-btn-color' />
        <div className='adopt-page-container container-fluid'>
          <div className='adopt-page-row row no-gutters' />
          <div className='adopt-and-donate-row row no-gutters'>
            <div className='adopt-donate-header-col col-lg-12'>
              <h1 className='adopt-donate-header'>Adopt & Donate!</h1>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              <div className='adopt-text'>
                Please visit the ASPCA link below to find an adoptable pet in your area; and while you're there, you can learn more about how you can give to animals in need. Your
                local SPCA is also a great place to start!
              </div>
            </div>
          </div>
          <div className='aspca-image-row row no-gutters'>
            <div className='aspca-image'>
              <a href='https://www.aspca.org/adopt-pet/adoptable-dogs-your-local-shelter#petfocus_0=&page_0=7&breed_0=&sex_0=&distance_0=25&location_0=21157&action_0=search'>
                <img src='/static/images/adopt-page-images/aspca-logo-2.png' alt='ASPCA adoption page' draggable='false' />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Adopt;
