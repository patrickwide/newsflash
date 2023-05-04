import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ articles, bookmarkArticle }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <div key={article.title}>
            <NewsItem article={article} bookmarkArticle={bookmarkArticle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
