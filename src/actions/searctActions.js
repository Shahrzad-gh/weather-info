import {SEARCH_CITY, FETCH_WEATHER} from './types';
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
    }, console.log("search Success")))
    .catch(err => console.log("search error",err))
}