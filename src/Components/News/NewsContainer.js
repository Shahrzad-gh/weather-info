import React from 'react'
import NewsCard from "./NewsCard"
export default function NewsContainer(props) {
    const {articles} = props;
    return (
        <div>
            <p style={{fontSize:30, backgroundColor:"red", color:"white",textAlign:"center"}}>News Headline</p>
        <div className="row m-3">
            {articles && articles.map((article,index)=> <NewsCard key={index} article={article}/>)}
        </div>
        </div>
    )
}
