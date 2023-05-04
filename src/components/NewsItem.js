import React from "react";

function NewsItem({ article, bookmarkArticle }) {
  // Handles when the user clicks the Bookmark button
  const handleBookmarkClick = () => {
    bookmarkArticle(article);
  };

  // Handles when the user clicks the Comments button
  const handleCommentsClick = () => {
    // Code for displaying the comments section goes here
  };

  // Handles when the user clicks one of the Share buttons
  const handleShareClick = (platform) => {
    // Code for sharing the article on the given platform goes here
  };

  let authorString;
  if (
    article.author &&
    /<a\s+[^>]*href="[^"]*"[^>]*>(.*?)<\/a>/gi.test(article.author)
  ) {
    const authorRegex = /<a\s+[^>]*href="[^"]*"[^>]*>(.*?)<\/a>/gi;
    const authorNames = [];

    let match;
    while ((match = authorRegex.exec(article.author))) {
      authorNames.push(match[1]);
    }

    authorString = authorNames.join(", ");
  } else {
    authorString = article.author || "Unknown Author";
  }

  return (
    <div className="bg-gray-100 border p-4 mb-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      {/* Displays the article title */}
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>

      {/* Displays the article image */}
      <img
        src={
          article.urlToImage ||
          "https://via.placeholder.com/800x400.png?text=Image+Not+Available"
        }
        alt={article.title}
        className="mb-4 transform hover:scale-105 transition duration-300 ease-in-out rounded-md"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/800x400.png?text=Image+Not+Available";
        }}
      />

      {/* Displays the article description */}
      <p className="mb-4 text-xl">
        {article.description || "Description Missing"}
      </p>

      {/* Displays the article source, author and publish date */}
      <p className="mb-4 text-gray-600 text-sm">
        Source: {article.source.name || "Unknown Source"} - By: {authorString} -
        on: {article.publishedAt}
      </p>

      {/* Displays the article content */}
      <p className="mb-4 text-xl">{article.content || "Content Missing"}</p>

      {/* Button for bookmarking the article */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
        onClick={handleBookmarkClick}
      >
        Bookmark
      </button>

      {/* Button for displaying the comments section */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
        onClick={handleCommentsClick}
      >
        Comments
      </button>

      {/* Share buttons for different platforms */}
      <div className="flex items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
          onClick={() => handleShareClick("Facebook")}
        >
          Share on Facebook
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
          onClick={() => handleShareClick("Twitter")}
        >
          Share on Twitter
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
          onClick={() => handleShareClick("LinkedIn")}
        >
          Share on LinkedIn
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
          onClick={() => window.open(article.url, "_blank")}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default NewsItem;
