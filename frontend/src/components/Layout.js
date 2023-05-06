import React, { useState } from "react";

const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
  return (
    <div>
      <header>{header}</header>
      <div className="md:container md:mx-auto">
        {/* <TabComponent /> */}
        <div className="grid grid-cols-4 gap-4 font-mono rounded-lg">
          <div className="p-2">
            <div className="sticky top-0">{sidebarLeft}</div>
          </div>
          <div className="col-span-2 border-gray-200 dark:border-gray-700">
            {main}
          </div>
          <div className="p-2">
            <div className="sticky top-0">{sidebarRight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="p-4">
      <div className="flex rounded-md bg-gray-100">
        <button
          className={`flex-1 p-3 rounded-md ${
            activeTab === 1
              ? "bg-blue-800 text-white m-1"
              : "m-1 bg-gray-200 hover:bg-blue-200"
          } focus:outline-none mr-1`}
          onClick={() => handleTabClick(1)}
        >
          <span className="text-center">Tab 1</span>
        </button>
        <button
          className={`flex-1 p-3 rounded-md ${
            activeTab === 2
              ? "bg-blue-800 text-white m-1"
              : "m-1 bg-gray-200 hover:bg-blue-200"
          } focus:outline-none mr-1`}
          onClick={() => handleTabClick(2)}
        >
          <span className="text-center">Tab 2</span>
        </button>
        <button
          className={`flex-1 p-3 rounded-md ${
            activeTab === 3
              ? "bg-blue-800 text-white m-1"
              : "m-1 bg-gray-200 hover:bg-blue-200"
          } focus:outline-none mr-1`}
          onClick={() => handleTabClick(3)}
        >
          <span className="text-center">Tab 3</span>
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && <div>Tab 1 selected</div>}
        {activeTab === 2 && <div>Tab 2 selected</div>}
        {activeTab === 3 && <div>Tab 3 selected</div>}
      </div>
    </div>
  );
}
