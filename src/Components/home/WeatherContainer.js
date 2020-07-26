import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard';
export class WeatherContainer extends Component {

  render() {
      const {weather} = this.props;
      const {forecast} = this.props;
      console.log("weather", weather)
      console.log("forecast", forecast)

      let content = ''
        
       content = weather.cod === 200
      ? 
      <>
      <WeatherCard weather={weather}/>
      {setTimeout(function (){
        return 
        return (<ForecastCard forecast={forecast}/>)
      },2000)}
      </>
      :null;
      console.log("content", content)
    return (
      <div className="weatherContainer container bg-info mt-2 mb-2">
        {content}
      </div>
    );
  }
}
const mapStateToProps = state =>({
  weather : state.forecast.weather,
  forecast : state.forecast.forecast
    //console.log("state",state);
})


export default connect(mapStateToProps)(WeatherContainer);
