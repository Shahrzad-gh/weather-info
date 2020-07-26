import {SEARCH_CITY, FETCH_WEATHER, FORECAST_WEATHER} from './types';
import {APIKey} from '../APIKey'
import axios from 'axios';

export const searchCity = text => dispatch => {
    dispatch( {
        type: SEARCH_CITY,
        payload: text
    })
}
export const fetchWeather = text => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIKey}`)
    .then(response => dispatch({
        type: FETCH_WEATHER,
        payload: response.data
    }, console.log("weather search Success")))
    .catch(err => console.log("search error",err))
}

export const forecastWeather = text => dispatch =>{
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${APIKey}`)
    .then(response => dispatch({
        type: FORECAST_WEATHER,
        payload: response.data
    }, console.log("forecast Success")))
    .catch(err => console.log("search error",err))
}