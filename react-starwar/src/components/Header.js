import React, { Component } from 'react';
import '../css/style.css'

class Header extends Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-3">Star Wars</h1>
          <p className="lead">The Vehicles of Star Wars</p>
        </div>
      </div>
    )
  }
}

export default Header;
