import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import NEWS_API_KEY from "./data/config";
import Search from "./components/Search";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${NEWS_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching news data: ", error);
        setError(error);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      (async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}`
          );
          const data = await response.json();
          setArticles(data.articles);
          setIsLoading(false);
          console.log(data);
        } catch (error) {
          console.error("Error fetching news data: ", error);
          setError(error);
          setIsLoading(false);
        }
      })();
    }
  }, [searchQuery]);

  // Function to handle bookmarking an article
  const handleBookmark = (article) => {
    if (!bookmarkedArticles.includes(article)) {
      const newBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(newBookmarks);
      localStorage.setItem("bookmarkedArticles", JSON.stringify(newBookmarks));
    }
    console.log("Success");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Render the Search component and pass the query and setSearchQuery function as props */}
      <Search onSubmit={(query) => setSearchQuery(query)} />
      {/* Pass the news data as props to the NewsList component */}
      <NewsList articles={articles} bookmarkArticle={handleBookmark} />
    </div>
  );
}

export default App;
