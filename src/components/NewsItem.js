import React from "react";

function NewsItem({ article }) {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>Author: {article.author}</p>
      <p>Published: {article.publishedAt}</p>
      <img src={article.urlToImage} alt={article.title} />
      <a href={article.url}>Read More</a>
    </div>
  );
}

export default NewsItem;
