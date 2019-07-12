import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

import dogs from "../data/dogs";
import main from "../styles/main.scss";

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
    console.log(this.state);
    return (
      <Fragment>
        <div className={`container-fluid ${dogs[this.state.index].className}`}>
          <div className='row no-gutters'>
            <div className={`background-accent-circle background-accent-${dogs[this.state.index].className}`} />
            <div className='col-lg-12'>
              <Nav />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='breed-info col-lg-5'>
              <h1 className='dog-breed'>{dogs[this.state.index].breed}</h1>
              <div className='breed-description'>{dogs[this.state.index].description}</div>
              <div className='learn-more-btn col-lg-5'>
                <Button buttonName='Learn More' />
              </div>
            </div>
            <div className='image-container col-lg-7'>
              <div>
                {/* <div className={`image-accent-circle image-accent-${dogs[this.state.index].className}`}> */}
                <img src={dogs[this.state.index].image} className={`dog-image-${dogs[this.state.index].className}`} />
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-5' />
            <div className='arrow-btns-container col-lg-7'>
              <button className='arrow-btn-prev' onClick={this.decreaseNumber}>
                <span className='icon-arrow-left'>⟵ </span>
                <span className='btn-text-prev'>PREV</span>
              </button>

              <button className='arrow-btn-next' onClick={this.increaseNumber}>
                <span className='btn-text-next'>NEXT</span>
                <span className='icon-arrow-right'>⟶</span>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
