import { useState } from "react";

const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <>
      <header>{header}</header>

      <div className="hidden lg:block lg:container lg:mx-auto">
        <div className="flex space-x-4">
          <div className="flex-none w-72">
            <ScrollableSidebar sidebar={sidebarLeft} />
          </div>
          <div className="flex-grow">
            <div className="dark:border-gray-700">{main}</div>
          </div>
          <div className="flex-none w-72">
            <ScrollableSidebar sidebar={sidebarRight} />
          </div>
        </div>
      </div>

      {/* Tabbed view for tablet and mobile */}
      <div className="lg:hidden">
        <div className="flex justify-center py-4">
          <button
            className={`mx-1 py-2 px-4 rounded-full ${
              activeTab === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(1)}
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

          <button
            className={`mx-1 py-2 px-4 rounded-full ${
              activeTab === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(2)}
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>

          <button
            className={`mx-1 py-2 px-4 rounded-full ${
              activeTab === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(3)}
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
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>
          </button>
        </div>

        {activeTab === 1 && (
          <div className="md:px-10 px-2 pb-4">
            <div className="max-w-md mx-auto">{sidebarLeft}</div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="overflow-hidden md:px-10 px-2 pb-4">
            <div className="w-24 min-w-full mx-auto">{main}</div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="md:px-10 px-2 pb-4">
            <div className="max-w-md mx-auto">{sidebarRight}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;

const ScrollableSidebar = ({ sidebar }) => {
  return (
    <div
      className="sticky top-0 py-4"
      style={{ overflowY: "scroll", maxHeight: "calc(100vh)" }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
      <div style={{ padding: "5px" }}>{sidebar}</div>
    </div>
  );
};
