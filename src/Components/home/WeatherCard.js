import React, { Component } from 'react'

export default class WeatherCard extends Component {
    render() {
        const {weather} = this.props;
        const {toCelcious} = this.props;
        console.log("weatherCard",weather);
        return (
            <div className="col-md-10  container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light">
              <h4>CURRENT WEATHER</h4>
              <p>{weather.dt_txt}</p>
              <i className="fas fa-cloud fa-2x p-2"></i>
             <div className="card-body">
                <h5><strong>{toCelcious} C</strong></h5>
                <h6>{weather.weather[0].main}</h6>
              </div>  
            </div>
          </div>
          {/* <div className="col-md-3 ">
            <div className="card bg-light">
              <h4>TODAY</h4>
              <i></i>
              <div className="card-body">
                <h3>Tempture</h3>
                <h6>Weather</h6>
              </div>  
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="card bg-light">
              <h4>TONIGHT</h4>
              <i></i>
              <div className="card-body">
                <h3>Tempture</h3>
                <h6>Weather</h6>
              </div>  
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="card bg-light">
              <h4>TOMMOROW</h4>
              <i></i>
              <div className="card-body">
                <h3>Tempture</h3>
                <h6>Weather</h6>
              </div>  
            </div>
          </div> */}
          <a href="/" className="btn- btn-primary text-center col-md-10 mt-3 p-2">See More ...</a>
        </div>
      </div>
        )
    }
}
