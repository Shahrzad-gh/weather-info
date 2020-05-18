import React , {Component} from "react";
import {searchCity, fetchWeather} from '../../actions/searctActions';
import {connect} from 'react-redux';

class SearchForm extends Component {
    onChange = e => {
        this.props.searchCity(e.target.value)
    }

    onSubmit = e => {
      e.preventDefault();
      console.log(this.props)
      this.props.fetchWeather(this.props.text)
    }
render() {
  return (
    <div className="bg-img">
      <div className="container p-5" >
        <div className="col-md-10 offset-md-1" >
          <div className="text-center color-orange mb-2 font-weight-bold ">
            Search for a City...
          </div>
          <form className="input-group mb-3 }" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search ......"
              aria-label="Recipient's username"
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button className="input-group-text" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
    }
}
const mapStateToProps = state => ({
    text: state.forecast.text
})
export default connect(mapStateToProps, {searchCity, fetchWeather})(SearchForm);
