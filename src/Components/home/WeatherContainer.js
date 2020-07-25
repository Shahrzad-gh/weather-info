import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherCard from './WeatherCard';
export class WeatherContainer extends Component {

  render() {
      const {forecast} = this.props;
      console.log("forecast", forecast)

      let content = ''
        
       content = forecast.cod === 200
      ? <WeatherCard forecast={forecast}/>
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
  forecast : state.forecast.forecast
    //console.log("state",state);
})


export default connect(mapStateToProps)(WeatherContainer);
