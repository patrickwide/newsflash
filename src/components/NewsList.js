import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.title}>
          <NewsItem article={article} />
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
