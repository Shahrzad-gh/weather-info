import React from 'react'

export default function NewsCard(props) {
    const {article} = props;
    return (
        <div className="col-md-4 mb-3">

        <div class="card h-100">
      <div class="card-body">
      <img width="300" height="300" src={article.urlToImage} alt="pic" className="card-img-top"/>

        <h5 class="card-title">{article.title}</h5>
        <p>author:{article.author}</p>
            <p>{article.publishedAt}</p>
        <p class="card-text">{article.description}</p>
        <a href={article.url} style={{color:"white"}} class="btn btn-primary">Read More...</a>
      </div>
    </div>
        </div>
    )
}
