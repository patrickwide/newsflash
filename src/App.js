import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from API
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=17465827019441a5afd89154468f8ba6')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));

    // Load bookmarked and saved articles from Local Storage
    const storedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (storedBookmarks) {
      setBookmarkedArticles(JSON.parse(storedBookmarks));
    }

    const storedSavedArticles = localStorage.getItem('savedArticles');
    if (storedSavedArticles) {
      setSavedArticles(JSON.parse(storedSavedArticles));
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

  // Function to handle saving an article
  const handleSave = (article) => {
    if (!savedArticles.includes(article)) {
      const newSaved = [...savedArticles, article];
      setSavedArticles(newSaved);
      localStorage.setItem('savedArticles', JSON.stringify(newSaved));
    }
  };

  return (
    <div>
      <h1>News App</h1>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={() => handleBookmark(article)}>Bookmark</button>
            <button onClick={() => handleSave(article)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
