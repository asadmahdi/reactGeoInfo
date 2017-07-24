import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import _ from 'lodash';
import GoogleMap from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\google_map';
import { fetchCountry } from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\actions';
import { connect } from 'react-redux';

class Country extends Component{

render(){
  console.log(this.props.match.params);

//display countries unique info
 let country;
  //console.log(this.props.countries);
  var names = this.props.countries.map( (obj)=> {
    if(this.props.match.params.id === obj.title){
    country = obj;
    return obj;
  }
  } )
  console.log(names);

  return(
    <div className={"parent " + country.title}>
    <div className="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/cities">Cities</Link>
      </div>

  <h1 className="countryName"> {country.title} </h1>
  <hr/>
  <ul className="factsList" >
    <li> Population: {country.population } </li>
    <li> Capital: {country.capital} </li>
    <li> Total Area: {country.area} </li>
    <li> Language: {country.language} </li>
    <li> 2016 GDP: {country.GDP} </li>
  </ul>
  <hr/>
  <div>
  <Link className= "btn btn-primary backButton" to="/countries">
          Back
        </Link >
        </div>
  </div>

  );

}

}

function mapStateToProps(state){
  return {countries: state.countries}
}


//export default Country;
export default connect(mapStateToProps)(Country);
