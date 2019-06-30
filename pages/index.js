import React, { Fragment } from "react";

import main from "../styles/main.scss";

const dogs = [
  {
    image: "https://hiddenpondlabradors.com/wp-content/uploads/2015/10/Dolce2128.jpg",
    breed: "lab",
    status: "good pupper"
  },
  {
    image: "https://trupanion.com/blog/wp-content/uploads/2017/09/GettyImages-512536165.jpg",
    breed: "corgi",
    status: "good pupper"
  },
  {
    image: "https://i.pinimg.com/originals/15/88/db/1588dba0ceed76c980a122a3d3a01974.jpg",
    breed: "beagle",
    status: "good pupper"
  },
  {
    image: "https://cdn.akc.org/Marketplace/Breeds/Shiba_Inu_SERP.jpg",
    breed: "shiba",
    status: "good pupper"
  },
  {
    image: "https://storage.googleapis.com/nom-nom-now/images/breeds/dachshund.jpg",
    breed: "weiner",
    status: "good pupper"
  }
];

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
        <h1>Click the Buttons to +/- the Number</h1>
        <h2>{this.state.index}</h2>
        <h3>{dogs[this.state.index].breed}</h3>
        <h3>status: {dogs[this.state.index].status}</h3>
        <img src={dogs[this.state.index].image} />
        <button onClick={this.increaseNumber}>+</button>
        <button onClick={this.decreaseNumber}>-</button>
        {/* <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              <button className='btn-primary title-change' onClick={this.contentChange}>
                {this.state.isToggleOn ? "YES" : "NO"}
              </button>
            </div>
          </div> */}
        {/* <div className='row'>
            <div className='col-lg-12'>
              <div className='genres'>Genre Buttons</div>
            </div>
          </div>
          <div className='games row'>
            <div className='col-lg-12'>Games</div>
          </div> */}
        {/* </div> */}
      </Fragment>
    );
  }
}

export default App;
