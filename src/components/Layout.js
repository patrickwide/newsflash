import React from "react";

const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
  return (
    <div>
      <header>{header}</header>
      <div className="md:container md:mx-auto">
        <div className="grid grid-cols-4 gap-4 font-mono rounded-lg">
          <div className="">
            <div className="sticky top-0">{sidebarLeft}</div>
          </div>
          <div className="col-span-2 border-gray-200 dark:border-gray-700">
            {main}
          </div>
          <div className="">
            <div className="sticky top-0">{sidebarRight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
