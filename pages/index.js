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
            <div className='background-circles' />
            <div className='col-lg-12'>
              <Nav />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='breed-info col-lg-5'>
              <h1 className='dog-breed'>{dogs[this.state.index].breed}</h1>
              <div className='breed-description'>
                The Labrador Retriever is a strongly built, medium-sized, short-coupled, dog possessing a sound, athletic, well-balanced conformation
                that enables it to function as a retrieving gun dog; the substance and soundness to hunt waterfowl or upland game for long hours under
                difficult conditions; the character and quality to win in the show ring; and the temperament to be a family companion.
              </div>
              <div className='learn-more-btn col-lg-5'>
                <Button button='Learn More' />
              </div>
            </div>
            <div className='image-container col-lg-7'>
              <div className='image-circle'>
                <img src={dogs[this.state.index].image} className='dog-image' />
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-5' />
            <div className='arrows-container col-lg-7'>
              <button className='back-arrow' onClick={this.decreaseNumber}>
                <span className='icon-left'>⟵ </span>
                <span className='prev'>PREV</span>
              </button>

              <button className='forward-arrow' onClick={this.increaseNumber}>
                <span className='next'>NEXT</span>
                <span className='icon-right'>⟶</span>
              </button>
            </div>
            <h2>{this.state.index}</h2>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
