import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from API
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=17465827019441a5afd89154468f8ba6')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));

    // Load bookmarked articles from Local Storage
    const storedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (storedBookmarks) {
      setBookmarkedArticles(JSON.parse(storedBookmarks));
    }
  }, []);

  // Function to handle bookmarking an article
  const handleBookmark = (article) => {
    if (!bookmarkedArticles.includes(article)) {
      const newBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(newBookmarks);
      localStorage.setItem('bookmarkedArticles', JSON.stringify(newBookmarks));
    }
  };

  return (
    <div>
      <h1>News App</h1>
      <div>
        <h2>Bookmarked Articles:</h2>
        {bookmarkedArticles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Top Headlines:</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button onClick={() => handleBookmark(article)}>Bookmark</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
