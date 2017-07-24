import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import _ from 'lodash';
import GoogleMap from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\google_map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Countries extends Component{

  renderPosts(countries){
    console.log(countries);
      return _.map(countries, country => {
        return (

        <tr key={country.title}>
        <td><GoogleMap lon={country.lon} lat={country.lat} zoom={2}/></td>
        <td><Link to={`/country/${country.title}`}>{country.title} </Link></td>
        <td> <img className="flag" src={country.flagurl}   /></td>
        </tr>

        );
      });

    }

render(){

  var countries = this.props.countries;
/*
  var countries = [
		{ title:'USA', pages: 101, lat:33.5579383, lon:-97.8055885},
		{ title:'Mexico', pages: 123, lat:19.390519, lon:-99.4238064},
		{ title:'Canada', pages: 432, lat:57.5579383, lon:-97.8055885},

	]; */
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
                {this.renderPosts(countries)}
              </tbody>
            </table>
      </div>

  );
}
}

function mapStateToProps(state){
  console.log("mapStateToProps: " + state.countries);
  return {
   countries: state.countries
  }
 };

 function mapDispatchToProps(dispatch){
	//whenever selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({ selectCountry: selectCountry}, dispatch);
}

//export default Countries;
export default connect(mapStateToProps)(Countries);
