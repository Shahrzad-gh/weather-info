import React, { Component } from 'react'
import moment from 'moment';
export default function WeatherCard(props) {
      console.log("props", props)
        const {weather} = props;
        const dayName = moment(moment.unix(weather.dt).utc()._d).format('dddd');
        const date= moment(moment.unix(weather.dt).utc()._d).format("MMM Do YY")
        console.log("t",weather);

        function toCelcious(temp){
          console.log("to Celcious",temp -273.15)
          return Math.round(temp -273.15);
        }

        function weatherIcon(id){
          
          switch(id){
            case 200:
            case 201:
            case 202:
            case 210:
            case 211:
            case 212:
            case 221:
            case 230:
            case 231:
            case 223:
            {
              return "http://openweathermap.org/img/wn/11d@2x.png";
              break;
            }
            case 300:
            case 301:
            case 302:
            case 310:
            case 311:
            case 312:
            case 313:
            case 314:
            case 321:
            {
              return "http://openweathermap.org/img/wn/09d@2x.png";
              break;
            }
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            {
              return "http://openweathermap.org/img/wn/10d@2x.png";
              break;
            }
            case 511:
            {
              return "http://openweathermap.org/img/wn/13d@2x.png";
              break;
            }
            case 520:
            case 521:
            case 522:
            case 531:
            {
                return "http://openweathermap.org/img/wn/09d@2x.png";
                break;
            }  
            case 600:
            case 601:
            case 602:
            case 611:
            case 612:
            case 613:
            case 615:
            case 616:
            case 620:
            case 621:
            case 622:
            {
              return "http://openweathermap.org/img/wn/13d@2x.png";
              break;
            }
            case  701:
            case  711:
            case  721:
            case  731:
            case  741:
            case  751:
            case  761:
            case  762:
            case  771:
            case  781:
            {
              return "http://openweathermap.org/img/wn/50d@2x.png";
              break;
            }
            case 800:{
              return "http://openweathermap.org/img/wn/01d@2x.png";
              break;
            }
            case 801:
            {
              return "http://openweathermap.org/img/wn/02d@2x.png";
              break;
            }               
            case 802:
            {
              return "http://openweathermap.org/img/wn/03d@2x.png";
              break;
            }   
            case 803:
            case 804:
            {
              return "http://openweathermap.org/img/wn/04d@2x.png";
              break;
            }  
            default: return
          }
        }
        return (

              <div className="weatherCard">
                <div className="row">
          <div className="tempeture col-md-6 mb-2">
            <div className="row">
            <div className="col-md-4">
              <h1>{weather.name}</h1>
              </div>
              <div className="col-md-4">
                <div className="row">
                <p>
                  <i className="fas fa-arrow-circle-down"></i>
                  &nbsp;{toCelcious(weather.main.temp_min)}&#8451;
                </p>
              <p>
              <i className="fas fa-arrow-circle-up"></i>

              &nbsp;{toCelcious(weather.main.temp_max)}&#8451;
                </p>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-md-5 p-3">
              <p>{dayName}</p>
              <p>{date}</p>
              <div className="row">
              <p>wind {weather.wind.speed} km/h</p>
              </div>
              <div className="row">
              {weather.rain && (
                <>
                <p>icon</p>
                <p>30%</p>
                </>
                )}
              {weather.snow && (
                <>
                <p>icon</p>
                <p>30%</p>
                </>
                )}
              </div>
              </div>
              <div className="col-md-4 p-0">
                <p>
                  <img width="200" height="200"
                  src={weatherIcon(weather.weather[0].id)}
                  alt="icon"
                  />
                </p>
              </div>
              <div className="col-md-3">
                <h3>{toCelcious(weather.main.temp)}&#8451;</h3>
              </div>
            </div>
            <div className="row">
            <p style={{fontSize:30}}>{weather.weather[0].description}</p>
            </div>
            
          </div>
          
        </div>
</div>
        )
    }

