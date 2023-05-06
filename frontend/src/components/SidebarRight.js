import React from "react";

function SidebarRight({
  selectedCategories,
  recentSearches,
  onDeleteSearchTerm,
}) {
  const groupedSearches = recentSearches.reduce((acc, searchTerm) => {
    if (searchTerm in acc) {
      acc[searchTerm].count++;
    } else {
      acc[searchTerm] = { count: 1, searchTerm };
    }
    return acc;
  }, {});

  const searchList = Object.values(groupedSearches).map(
    ({ searchTerm, count }, index) => (
      <li key={index}>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2 relative"
        >
          <span className="inline-block mr-2 text-gray-900 dark:text-white">
            {searchTerm}
          </span>
          {count > 1 && (
            <span className="inline-block bg-gray-200 text-gray-500 px-2 rounded-full text-sm">
              {count}
            </span>
          )}
          <span className="absolute right-0 top-0 flex items-center h-full pr-3">
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={() => onDeleteSearchTerm(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 10.585l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12l-4.95-4.95 1.414-1.414L12 10.586z" />
              </svg>
            </button>
          </span>
        </a>
      </li>
    )
  );

  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          Categories
        </h2>
        <ul className="list-none">
          {selectedCategories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2 relative"
              >
                <span className="inline-block mr-2 text-gray-900 dark:text-white">
                  {category}
                </span>
                <span className="absolute text-sm text-gray-400 right-0 top-0 flex items-center h-full pr-3">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          Recent Searches
        </h2>
        <ul className="list-none">{searchList}</ul>
      </div>
    </div>
  );
}

export default SidebarRight;
