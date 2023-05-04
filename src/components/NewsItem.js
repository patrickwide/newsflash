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
    switch (platform) {
      case "Facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            article.url
          )}&picture=${encodeURIComponent(article.imageUrl)}`, // Include the image URL in the Facebook share URL
          "_blank"
        );
        break;
      case "Twitter":
        const tweetText = `Check out this article: ${article.title} ${article.url}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          tweetText
        )}&url=${encodeURIComponent(article.imageUrl)}`; // Include the image URL in the Twitter share URL
        window.open(twitterUrl, "_blank");
        break;
      case "LinkedIn":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            article.url
          )}&title=${encodeURIComponent(
            article.title
          )}&summary=${encodeURIComponent(
            article.description
          )}&source=${encodeURIComponent(article.imageUrl)}`, // Include the image URL in the LinkedIn share URL
          "_blank"
        );
        break;
      default:
        console.error(`Invalid platform: ${platform}`);
    }
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
    <div class="bg-white dark:bg-gray-800 border hover:bg-gray-50 border-b-gray-200 dark:border-b-gray-700 m-2">
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
        <div class="p-5">
          {/* Displays the article source, author and publish date */}
          <p className="mb-4 text-gray-600 text-sm">
            Source: {article.source.name || "Unknown Source"} - By:{" "}
            {authorString} - on: {article.publishedAt}
          </p>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            </h5>
          </a>

          <p class="font-normal text-gray-700 dark:text-gray-200">
            {article.description || "Description Missing"}
          </p>
        </div>
      </div>

      <div class="flex w-full">
        <div class="flex-1 flex items-center justify-center p-4">
          <button class="p-2 rounded-full hover:bg-blue-100">
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
        <div class="flex-1 flex items-center justify-center p-4">
          <button class="p-2 rounded-full hover:bg-blue-100">
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
        <div class="flex-1 flex items-center justify-center p-4">
          <button class="p-2 rounded-full hover:bg-blue-100">
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
        <div class="flex-1 flex items-center justify-center p-4">
          <button class="p-2 rounded-full hover:bg-blue-100">
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

// <div className="bg-gray-100 border p-4 mb-4 rounded-lg shadow-md">
//       {/* Displays the article title */}
//       <h2 className="text-3xl font-bold mb-4">{article.title}</h2>

//       {/* Displays the article image */}
//       <img
// src={
//   article.urlToImage ||
//   "https://via.placeholder.com/800x400.png?text=Image+Not+Available"
// }
// alt={article.title}
// onError={(e) => {
//   e.target.src =
//     "https://via.placeholder.com/800x400.png?text=Image+Not+Available";
// }}
//       />

//       {/* Displays the article source, author and publish date */}
//       <p className="mb-4 text-gray-600 text-sm">
//         Source: {article.source.name || "Unknown Source"} - By: {authorString} -
//         on: {article.publishedAt}
//       </p>

//       {/* Displays the article description */}
//       <p className="mb-4 text-xl">
//         {article.description || "Description Missing"}
//       </p>

//       {/* Button for bookmarking the article */}
//       <button
//         className={`bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2 ${
//           bookmarked && "bg-green-500"
//         }`}
//         onClick={handleBookmarkClick}
//         disabled={bookmarked}
//       >
//         {bookmarked ? "Bookmarked" : "Bookmark"}
//       </button>

//       {/* Button for displaying the comments section */}
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
//         onClick={handleCommentsClick}
//       >
//         Comments
//       </button>

//       {/* Share buttons for different platforms */}
//       <div className="flex items-center mb-4">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
//           onClick={() => handleShareClick("Facebook")}
//         >
//           Share on Facebook
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
//           onClick={() => handleShareClick("Twitter")}
//         >
//           Share on Twitter
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
//           onClick={() => handleShareClick("LinkedIn")}
//         >
//           Share on LinkedIn
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2 mt-2"
//           onClick={() => window.open(article.url, "_blank")}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
// <svg
//   aria-hidden="true"
//   class="w-4 h-4 ml-2 -mr-1"
//   fill="currentColor"
//   viewBox="0 0 20 20"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     fill-rule="evenodd"
//     d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//     clip-rule="evenodd"
//   ></path>
// </svg>
