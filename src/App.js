import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import NEWS_API_KEY from "./data/config";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Pass the news data as props to the NewsList component */}
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
