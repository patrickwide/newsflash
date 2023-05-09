import React from "react";

function SidebarLeft({ bookmarkedArticles }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
        Bookmarks
      </h2>

      {bookmarkedArticles
        .slice()
        .reverse()
        .map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.source.name}
            </h5>

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
              className="mx-auto rounded-xl"
            />

            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
              {article.title}
            </p>
          </a>
        ))}
    </div>
  );
}

export default SidebarLeft;
