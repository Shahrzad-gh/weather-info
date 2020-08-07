import React from 'react'

export default function NewsCard(props) {
    const {article} = props;
    return (
        <div className="col-md-3 mb-3">

        <div className="card h-100">
      <div className="card-body">
      <img width="100" height="100" src={article.urlToImage} alt="pic" className="card-img-top"/>

        <p className="card-title"><strong>{article.title}</strong></p>
        <p>author: {article.author}</p>
            <p>{article.publishedAt}</p>
        {/* <p className="card-text">{article.description}</p> */}
        <div className="card-body">
        <a href={article.url} style={{color:"white"}} className="btn btn-primary card-link">Read More...</a>
          </div>
      </div>
    </div>
        </div>
    )
}
