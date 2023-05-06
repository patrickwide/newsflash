import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SidebarRight from "./components/SidebarRight";
import SidebarLeft from "./components/SidebarLeft";
import newsCategories from "./data/newsCategories";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Select five random categories from the newsCategories array
    const randomCategories = [];
    while (randomCategories.length < 5) {
      const randomIndex = Math.floor(Math.random() * newsCategories.length);
      const category = newsCategories[randomIndex];
      if (!randomCategories.includes(category)) {
        randomCategories.push(category);
      }
    }
    setSelectedCategories(randomCategories);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://patrickmoringaschool.pythonanywhere.com/api/top-headlines`
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
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches) {
      setRecentSearches(storedSearches);
    }

    if (searchQuery) {
      (async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `http://patrickmoringaschool.pythonanywhere.com/api/search?q=${searchQuery}&pageSize=15`
          );
          const data = await response.json();
          setRecentSearches((prevSearches) => [...prevSearches, searchQuery]);
          setArticles(data.articles);
          setIsLoading(false);
          console.log(data);
          localStorage.setItem(
            "recentSearches",
            JSON.stringify(recentSearches)
          );
        } catch (error) {
          console.error("Error fetching news data: ", error);
          setError(error);
          setIsLoading(false);
        }
      })();
    }
  }, [searchQuery]);

  useEffect(() => {
    // Define an async function and immediately invoke it
    (async () => {
      try {
        // Use await to handle the asynchronous localStorage.getItem call
        const storedBookmarks = await localStorage.getItem(
          "bookmarkedArticles"
        );
        if (storedBookmarks) {
          setBookmarkedArticles(JSON.parse(storedBookmarks));
          setIsLoading(false);
          console.log(storedBookmarks);
        }
      } catch (error) {
        console.error("Error fetching bookmarkedArticles: ", error);
        setError(error);
        setIsLoading(false);
      }
    })();
  }, []);
  function handleOnDeleteSearchTerm(index) {
    setRecentSearches((prevSearches) =>
      prevSearches.slice(0, index).concat(prevSearches.slice(index + 1))
    );
  }

  // Function to handle bookmarking an article
  const handleBookmark = (article) => {
    if (!bookmarkedArticles.includes(article)) {
      const newBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(newBookmarks);
      localStorage.setItem("bookmarkedArticles", JSON.stringify(newBookmarks));
    }
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
    setSearchQuery(query);
  }

  function handleOnDeleteSearchTerm(index) {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches) {
      const updatedSearches = storedSearches.filter((_, i) => i !== index);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      setRecentSearches(updatedSearches);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800">
      <Layout
        header={<Header onSearchSubmit={handleOnSearchSubmit} />}
        main={<NewsList articles={articles} bookmarkArticle={handleBookmark} />}
        sidebarLeft={<SidebarLeft bookmarkedArticles={bookmarkedArticles} />}
        sidebarRight={
          <SidebarRight
            selectedCategories={selectedCategories}
            recentSearches={recentSearches}
            onDeleteSearchTerm={handleOnDeleteSearchTerm}
          />
        }
      />
    </div>
  );
}

export default App;
