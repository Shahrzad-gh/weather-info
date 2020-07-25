import React, { Component } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
export default function WeatherCard(props) {
      console.log("props", props)
        const {forecast} = props;
        const {dt, wind, weather, main, rain, snow} = forecast;
        const dayName = moment(moment.unix(dt).utc()._d).format('dddd');
        const date= moment(moment.unix(dt).utc()._d).format("MMM Do YY")
        console.log("t",moment(moment.unix(dt).utc()._d).format("MMM Do YY"));

        function toCelcious(temp){
          console.log("to Celcious",temp -273.15)
          return Math.round(temp -273.15);
        }

        return (

              <div className="weatherCard">
                <div className="row">
          <div className="tempeture col-md-4 mb-2">
            <div className="row">
            <div className="col-md-4">
              <h1>{forecast.name}</h1>
              </div>
              <div className="col-md-4">
                <div className="row">
                <p>
                  <i className="fas fa-arrow-circle-down"></i>
                  {toCelcious(main.temp_min)}
                </p>
              <p>
              <i className="fas fa-arrow-circle-up"></i>

                {toCelcious(main.temp_max)}
                </p>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-md-5 p-3">
              <p>{dayName}</p>
              <p>{date}</p>
              <div className="row">
              <p>wind {wind.speed} km/h</p>
              </div>
              <div className="row">
              {rain && (
                <>
                <p>icon</p>
                <p>30%</p>
                </>
                )}
              {snow && (
                <>
                <p>icon</p>
                <p>30%</p>
                </>
                )}
              </div>
              </div>
              <div className="col-md-3">
                <p>icon</p>
                <p>{weather[0].description}</p>
              </div>
              <div className="col-md-4">
                <h4>{toCelcious(main.temp)}&#8451;</h4>
              </div>
            </div>
            
          </div>
          <div className="forecast col-md-4 mb-2"><p>Forecast</p></div>
        </div> 
        </div>

        )
    }

