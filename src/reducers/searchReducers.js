import {SEARCH_CITY, FETCH_WEATHER} from '../actions/types';

const initialState = {
    text: "",
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
                forecast: action.payload,
            }
        default:
            return state;    
    }
}