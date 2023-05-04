import React from "react";

const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
  return (
    <div>
      <header>{header}</header>
      <div className="md:container md:mx-auto">
        <div class="grid grid-cols-4 gap-4 font-mono rounded-lg">
          <div class="">
            <div className="sticky top-0">{sidebarLeft}</div>
          </div>
          <div class="col-span-2 border-gray-200 dark:border-gray-700">
            {main}
          </div>
          <div class="">
            <div className="sticky top-0">{sidebarRight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
