import React, { Component } from 'react'
import  WeatherContainer  from './WeatherContainer'
import SearchForm from './SearchForm'

export class Landing extends Component {
    render() {
        return (
            <div>
                <WeatherContainer />              
            </div>
        )
    }
}

export default Landing
