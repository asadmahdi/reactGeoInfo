import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class HomePage extends Component{

  render() {
    return (
      <div className="parent Welcome">

        <div className="topnav" id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/cities">Cities</Link>
          <div className="SiteName">Site Name</div>
        </div>


      </div>
    );
  }
}

export default HomePage;
