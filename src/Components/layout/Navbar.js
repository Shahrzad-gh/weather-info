import React from "react";
import { Component } from "react";
import {searchCity, fetchWeather, forecastWeather} from '../../actions/searctActions';
import {connect} from 'react-redux';
class Navbar extends Component {
  onChange = e => {
    this.props.searchCity(e.target.value)
}

onSubmit = e => {
  e.preventDefault();
  console.log(this.props)
  this.props.fetchWeather(this.props.text)
  this.props.forecastWeather(this.props.text)
}
  render(){
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="nav-header">
            <div className="nav-brand text-white font-weight-normal">
              <i className="fas fa-sun" /> &nbsp;WeatherLand
            </div>            
          </div>
        <form className="form-inline col-lg-10" onSubmit={this.onSubmit}>
          <input className="form-control mr-2 col-sm-8 col-md-8 col-lg-10" 
            type="search" 
            placeholder="Search location ... " 
            aria-label="Search" 
            onChange={this.onChange}/>
          <button className="btn bg-light my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
      </nav>
  );
}
}
const mapStateToProps = state => ({
  text: state.forecast.text
})
export default connect(mapStateToProps, {searchCity, fetchWeather, forecastWeather})(Navbar);
