import React, { Component } from "react";
import {fetchWeather} from '../../actions/searctActions';
import {connect} from 'react-redux'
export class Weather extends Component {
  componentDidMount(){
    this.props.fetchWeather(this.props.match.params);
    console.log("Did Mounts",this.props.match.params)
  }
  render() {
      const {forecast} = this.props;
      console.log("Weather", forecast);
      let dataInfo = (
              <div>
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={forecast.Poster} alt="loading" className="thumbnail" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4"> {forecast.Title} </h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {forecast.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {forecast.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {forecast.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {forecast.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {forecast.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {forecast.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {forecast.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About</h3>
              {forecast.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + forecast.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View On IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
      )
    return (
      <div>{dataInfo}</div>
    );
  }
}
const mapStateToProps = state => ({
    forecast : state.forecast.forecast
})
export default connect(mapStateToProps, {fetchWeather})(Weather);
