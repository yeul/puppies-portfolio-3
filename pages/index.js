import React, { Fragment } from "react";
import Nav from "../components/Nav";

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
        <div className={`container-fluid ${dogs[this.state.index].breed}`}>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              <Nav />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='breed-slogan col-lg-5'>Dog Breed Slogan Here.</div>
            <div className='dog-image col-lg-7'>Dog Image.</div>
          </div>
          <div className='row no-gutters'>
            <div className='breed-description col-lg-5'>Breed description.</div>
          </div>
          <div className='row no-gutters'>
            <div className='learn-more-btn col-lg-5'>
              <button>Learn More</button>
            </div>
          </div>
          <h1 className={`${dogs[this.state.index].breed}`}>Click the Buttons to +/- the Number</h1>
          <h2>{this.state.index}</h2>
          <h3>{dogs[this.state.index].breed}</h3>
          <h3>status: {dogs[this.state.index].status}</h3>
          <img src={dogs[this.state.index].image} />
          <button onClick={this.increaseNumber}>+</button>
          <button onClick={this.decreaseNumber}>-</button>
        </div>
      </Fragment>
    );
  }
}

export default App;
