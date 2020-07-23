import React, { Component } from 'react'
import Moment from 'react-moment';
export default class WeatherCard extends Component {
    render() {
      console.log("props", this.props)
        const {weather} = this.props;
        const {toCelcious} = this.props;
        const {time} = this.props
        const {wind}=this.props;
        console.log("weather",weather);
        return (

          <div className="col">
            <div className="card bg-warning text-light align-items-center">
              <h4>Local Weather Report</h4>
              <br/>
              <Moment unix>{time}</Moment>
              {/* <i className="fas fa-cloud fa-2x p-2"></i> */}
             <div className="card-body">
                <h5><strong>{toCelcious} C</strong></h5>
                <h6>{weather[0].main}</h6>
                <p>Speed: {wind.speed}</p>
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
          {/* <a href="/" className="btn- btn-primary text-center col-md-10 mt-3 p-2">See More ...</a> */}
        </div>
      </div>
        )
    }
}
