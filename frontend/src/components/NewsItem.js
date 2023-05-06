import React, { useState } from "react";

function NewsItem({ article, bookmarkArticle }) {
  const [bookmarked, setBookmarked] = useState(false);

  // Handles when the user clicks the Bookmark button
  const handleBookmarkClick = () => {
    bookmarkArticle(article);
    setBookmarked(true);
  };

  // Handles when the user clicks the Comments button
  const handleCommentsClick = () => {
    // Code for displaying the comments section goes here
  };

  // Handles when the user clicks one of the Share buttons
  const handleShareClick = (platform) => {
    const tweetText = `Check out this article:\n${article.title}\n${article.url}`;

    switch (platform) {
      case "Facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            article.url
          )}&quote=${encodeURIComponent(tweetText)}`,
          "_blank"
        );
        break;
      case "Twitter":
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          tweetText
        )}`;
        window.open(twitterUrl, "_blank");
        break;
      case "LinkedIn":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            article.url
          )}&title=${encodeURIComponent(
            article.title
          )}&summary=${encodeURIComponent(article.description)}`,
          "_blank"
        );
        break;
      default:
        console.error(`Invalid platform: ${platform}`);
    }
  };

  async function handleCopyToClipBoard() {
    const textToCopy = `Check out this article:\n${article.title}\n${article.url}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

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
    <div className="bg-white border border-b-gray-200 dark:border-b-gray-700 m-2 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div onClick={() => window.open(article.url, "_blank")}>
        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/800x400.png?text=Image+Not+Available"
          }
          alt={article.title}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/800x400.png?text=Image+Not+Available";
          }}
          className="mx-auto"
        />
        <div
          className="p-5"
          onClick={() => window.open(article.url, "_blank")}
          style={{ cursor: "pointer" }}
        >
          {/* Displays the article source, author and publish date */}
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 text-sm">
            Source: {article.source.name || "Unknown Source"} - By:{" "}
            {authorString} - on: {article.publishedAt}
          </p>

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {article.title}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-200">
            {article.description || "Description Missing"}
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex-1 flex items-center justify-center p-4">
          <button
            className="p-2 rounded-full hover:bg-blue-800 dark dark:text-white hover:text-white dark:hover:text-dark"
            onClick={handleBookmarkClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <button className="p-2 rounded-full hover:bg-blue-800 dark dark:text-white hover:text-white dark:hover:text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <button
            className="p-2 rounded-full hover:bg-blue-800 dark dark:text-white hover:text-white dark:hover:text-dark"
            onClick={() => handleCopyToClipBoard()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <button
            className="p-2 rounded-full hover:bg-blue-800 dark dark:text-white hover:text-white dark:hover:text-dark"
            onClick={() => handleShareClick("Twitter")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
