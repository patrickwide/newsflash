import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import NEWS_API_KEY from "./data/config";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SidebarRight from "./components/SidebarRight";
import SidebarLeft from "./components/SidebarLeft";

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
            `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=15&apiKey=${NEWS_API_KEY}`
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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "50px", height: "50px" }}
            className="animate-spin"
          >
            <div className="h-full w-full border-4 border-t-purple-500 border-b-purple-700 rounded-[50%]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleOnSearchSubmit(query) {
    console.log(query);
    setSearchQuery(query);
  }

  return (
    <Layout
      header={<Header onSearchSubmit={handleOnSearchSubmit} />}
      main={<NewsList articles={articles} bookmarkArticle={handleBookmark} />}
      sidebarLeft={<SidebarLeft />}
      sidebarRight={<SidebarRight />}
    />
  );
}

export default App;
