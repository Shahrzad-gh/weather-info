import {SEARCH_CITY, FETCH_WEATHER, FORECAST_WEATHER} from '../actions/types';

const initialState = {
    text: "",
    weather : [],
    forecast : [],
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_CITY:
            return{
                ...state,
                text: action.payload,
            }
        case FETCH_WEATHER:
            return{
                ...state,
                weather: action.payload,
            }
        case FORECAST_WEATHER:
            return{
                ...state,
                forecast: action.payload,
            }
        default:
            return state;    
    }
}