import React from 'react'
import NewsCard from "./NewsCard"
export default function NewsContainer(props) {
    const {articles} = props;
    return (
        <div className="row m-3">
            {articles && articles.map((article,index)=> <NewsCard key={index} article={article}/>)}
        </div>
    )
}
