import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ articles, bookmarkArticle }) => (
  <div>
    {articles.map((article, index) => (
      <NewsItem
        key={index}
        article={article}
        bookmarkArticle={bookmarkArticle}
      />
    ))}
  </div>
);

export default NewsList;
