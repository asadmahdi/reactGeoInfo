import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import _ from 'lodash';
import GoogleMap from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\google_map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\actions';


class Cities extends Component{



  renderPosts(cities){
    //console.log(cities);

      return _.map(cities, city => {
        //this.props.fetchWeather(city.title);

        return (

        <tr key={city.title}>
        <td><GoogleMap lon={city.lon} lat={city.lat} zoom={5} /></td>
        <td><Link to={`/city/${city.title}`}>{city.title} </Link></td>
        <td> <img className="flag" src={city.flagurl}   /></td>
        </tr>

        );
      });

    }

render(){

  var cities = this.props.cities;

  return (
    <div>
    <div className="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/cities">Cities</Link>
      </div>
    <table className="table table-hover">
            <thead>
                <tr>
                  <th>Map </th>
                  <th>Name </th>
                  <th>Flag </th>
                </tr>
              </thead>
              <tbody>
                {this.renderPosts(cities)}
              </tbody>
            </table>
          </div>

  );
}
}

function mapStateToProps(state){
  //console.log("mapStateToProps: ");
  //console.log(state.actions.data);
  return {cities: state.cities}
  //have the weather data for a particular city now

 }


//export default cities;modified this
export default connect(mapStateToProps)(Cities);
