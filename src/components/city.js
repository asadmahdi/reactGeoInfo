import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import _ from 'lodash';
import GoogleMap from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\google_map';
import { fetchCountry } from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\actions';
import { connect } from 'react-redux';
import { fetchWeather } from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\actions';
import { bindActionCreators } from 'redux';

class City extends Component{


  constructor(props){
    super(props);
    //console.log("in the constructor");
    this.props.fetchWeather(this.props.match.params.id);

    //this.props.fetchCountry();
    //if this function does what i want it to , I gain access to city everywhere in this class

  }

render(){
  if(!this.props.data){
    return <div>......</div>;
  }
  //console.log(this.props.match.params.id);
  console.log("props");
  console.log(this.props);
  //console.log(this.props);
  //this.props.fetchWeather("Washington DC");//should map results of query to state

//display countries unique info
 let city;
  //console.log(this.props.countries);
  var names = this.props.cities.map( (obj)=> {
    if(this.props.match.params.id === obj.title){
    city = obj;
    return obj;
  }
  } )
  //console.log(names);

  return(
    <div className={"parent " + city.title}>
    <div className="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/cities">Cities</Link>
      </div>
    <div className="bar"> </div>

  <h1 className="countryName"> {city.title} </h1>
  <hr/>
  <ul className="factsList" >
    <li> Population: {city.population } </li>
    <li> Country: {city.country} </li>
    <li> Temperature: {Math.round(this.props.data.main.temp * (9/5) - 459.67) + "\u00B0"} </li>
    <li> Language: {city.language} </li>
    <li> 2016 GDP: {city.GDP} </li>
  </ul>
  <hr/>
  <div>
  <Link className= "btn btn-primary backButton" to="/cities">
          Back
        </Link >
        </div>
  </div>

  );

}

}

function mapStateToProps(state){
  //console.log("mapStateToProps");
  //console.log(state);
  return {cities: state.cities, data: state.actions.data }
}

//Anything returned from this function will end up
//as props on the city component, which should be results returned by the action

function mapDispatchToProps(dispatch){
  //console.log("dispatch");
  //console.log(dispatch);
 return bindActionCreators({ fetchWeather }, dispatch);
}

//export default Country;
export default connect(mapStateToProps,mapDispatchToProps)(City);
