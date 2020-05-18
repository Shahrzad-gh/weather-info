import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherCard from './WeatherCard';

export class WeatherContainer extends Component {
  toCelcious = (temp) =>{
    console.log("to C",temp -273.15)
    return Math.round(temp -273.15);
  }
  render() {
    console.log("Cont",this.props)
      const {forecast} = this.props;
      let content = ''
      console.log("WeatherContainer",forecast);
        
       content = forecast.cod === '200'
      ? forecast.list.map((weather,index) => <WeatherCard key={index*4} weather={weather} toCelcious={this.toCelcious(weather.main.temp)}/>)
      : null;
      
    return (
      <div>
        {content}
        </div>
    );
  }
}
const mapStateToProps = state =>({
    forecast : state.forecast.forecast
    //console.log("state",state);
})


export default connect(mapStateToProps)(WeatherContainer);
