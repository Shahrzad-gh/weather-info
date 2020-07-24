import React, { Component } from 'react'
import  WeatherContainer  from './WeatherContainer'
import SearchForm from './SearchForm'
import Axios from 'axios'
import {NewsAPI} from "../News/NewsAPI";
import NewsContainer from "../News/NewsContainer"
export class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            news:[]
        }      
    }
    componentDidMount(){
        Axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPI}`)
        .then((response)=> { this.setState({news: response.data});
            console.log("success", this.state.news )}
            ).catch((err)=> console.log("something wromg", err))
    }
    render() {
        const articles = this.state.news.articles;
        return (
            <div>
                <WeatherContainer />     
               <NewsContainer articles={articles} />)         
            </div>
        )
    }
}

export default Landing
