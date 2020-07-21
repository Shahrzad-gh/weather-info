import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherCard from './WeatherCard';

export class WeatherContainer extends Component {
  toCelcious = (temp) =>{
    console.log("to Celcious",temp -273.15)
    return Math.round(temp -273.15);
  }
  render() {
      const {forecast} = this.props;
      console.log("forecast", forecast)

      let content = ''
        
       content = forecast.cod === 200
      ? <WeatherCard weather={forecast.weather} time={forecast.dt} toCelcious={this.toCelcious(forecast.main.temp)}/>
      :null;
      console.log("content", content)
    return (
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-6 mb-2">
          {content}
          </div>
          <div className="col-md-6 mb-2">
          {content}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          {content}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  forecast : state.forecast.forecast
    //console.log("state",state);
})


export default connect(mapStateToProps)(WeatherContainer);
