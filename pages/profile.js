import React, { Fragment } from "react";
import Link from "next/link";

import Nav from "../components/Nav";

import main from "../styles/main.scss";

class Profile extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-6'>Dogs</div>
            <div className='col-lg-6'>Dogs</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
