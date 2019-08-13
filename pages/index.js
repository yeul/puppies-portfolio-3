import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

import dogs from "../data/dogs";
import "../styles/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }

  increaseNumber() {
    console.log(this.state.index);
    if (this.state.index === dogs.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState(state => ({ index: state.index + 1 }));
    }
  }

  decreaseNumber() {
    if (this.state.index < 1) {
      this.setState({ index: dogs.length - 1 });
    } else {
      this.setState(state => ({ index: state.index - 1 }));
    }
  }

  render() {
    return (
      <Fragment>
        <Nav currentPage='home' navBtn='home-nav-btn-color' />
        <div className='dogs-container container-fluid'>
          <div className='dogs-row row no-gutters'>
            <div className='dogs-col-left col-lg-5'>
              <div className='row no-gutters'>
                <div className='col-lg-12'>
                  <h1 className='dog-breed'>{dogs[this.state.index].breed}</h1>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-lg-12'>
                  <p className='dog-info'>{dogs[this.state.index].description}</p>
                  <Button className={dogs[this.state.index].className} />
                </div>
              </div>
            </div>
            <div className={`dogs-col-right col-lg-7 ${dogs[this.state.index].className}`}>
              <div className='dogs-right-row row no-gutters'>
                <div className='wave-col col-lg-1'>
                  <div className='rounded-col-img' />
                </div>
                <div className='arrow-btn-left-col col-lg-1'>
                  <div className='arrow-box-left'>
                    <div className='arrow-left' onClick={this.decreaseNumber}>
                      <i className='fas fa-angle-left fa-5x' />
                    </div>
                  </div>
                </div>
                <div className='dog-image-col col-lg-9'>
                  <div className='dog-image-container'>
                    <img className='dog-image' draggable='false' src={dogs[this.state.index].image} />
                  </div>
                </div>
                <div className='arrow-btn-right-col col-lg-1'>
                  <div className='arrow-box-right'>
                    <div className='arrow-right' onClick={this.increaseNumber}>
                      <i className='fas fa-angle-right fa-5x' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
