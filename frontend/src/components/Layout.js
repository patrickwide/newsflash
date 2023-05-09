import { useState } from "react";

const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <>
      <header>{header}</header>

      <div className="hidden lg:block lg:container lg:mx-auto">
        <div class="flex space-x-4">
          <div class="flex-none w-72">
            <div className="sticky top-0 py-4">{sidebarLeft}</div>
          </div>
          <div class="flex-grow">
            <div className="dark:border-gray-700">{main}</div>
          </div>
          <div class="flex-none w-72">
            <div className="sticky top-0 py-4">{sidebarRight}</div>
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
          <div class="md:px-10 px-2 pb-4">
            <div class="max-w-md mx-auto">{sidebarLeft}</div>
          </div>
        )}

        {activeTab === 2 && (
          <div class="overflow-hidden md:px-10 px-2 pb-4">
            <div class="w-24 min-w-full mx-auto">{main}</div>
          </div>
        )}

        {activeTab === 3 && (
          <div class="md:px-10 px-2 pb-4">
            <div class="max-w-md mx-auto">{sidebarRight}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;

// import { useState } from "react";

// const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div>
//       <div className="md:container md:mx-auto">
//         {/* <TabComponent /> */}
//         <div className="lg:block lg:grid lg:grid-cols-4 lg:gap-4 lg:font-mono lg:rounded-lg">
//           {/*  */}
//           <div className="lg:p-2 hidden lg:block">
//             <div className="sticky top-0">{sidebarLeft}</div>
//           </div>
//           {/*  */}
//           <div className="hidden lg:block lg:col-span-2 lg:border-gray-200 lg:dark:border-gray-700">
//             <div>{main}</div>
//           </div>
//           {/*  */}
//           <div className="lg:p-2 hidden lg:block">
//             <div className="sticky top-0">{sidebarRight}</div>
//           </div>
//         </div>
//       </div>

//       {/* Tabbed view for tablet and mobile */}
//       <div className="lg:hidden">
//         <div className="flex justify-center py-4">
//           <button
//             className={`mx-1 py-2 px-4 rounded-full ${
//               activeTab === 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab(1)}
//           >
//             Tab 1
//           </button>

//           <button
//             className={`mx-1 py-2 px-4 rounded-full ${
//               activeTab === 2
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab(2)}
//           >
//             Tab 2
//           </button>

//           <button
//             className={`mx-1 py-2 px-4 rounded-full ${
//               activeTab === 3
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setActiveTab(3)}
//           >
//             Tab 3
//           </button>
//         </div>

//         {activeTab === 1 && (
//           <div className="flex justify-center items-center p-4">
//             {sidebarLeft}
//           </div>
//         )}

//         {activeTab === 2 && <div className="p-4">{main}</div>}

//         {activeTab === 3 && (
//           <div className="flex justify-center items-center">{sidebarRight}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";

// const Layout = ({ header, main, sidebarLeft, sidebarRight }) => {
//   const [activeTab, setActiveTab] = useState(2);

//   const handleTabClick = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   return (
//     <div>
//       <header>{header}</header>

//       <div className="p-4">
//         <div className="flex rounded-md bg-gray-100">
//           <button
//             className={`flex-1 py-2 px-3 rounded-md ${
//               activeTab === 1
//                 ? "bg-blue-800 text-white m-1"
//                 : "m-1 bg-gray-300 hover:bg-blue-200"
//             } focus:outline-none mr-1`}
//             onClick={() => handleTabClick(1)}
//           >
//             <span className="text-center">Tab 1</span>
//           </button>
//           <button
//             className={`flex-1 py-2 px-3 rounded-md ${
//               activeTab === 2
//                 ? "bg-blue-800 text-white my-1"
//                 : "my-1 bg-gray-300 hover:bg-blue-200"
//             } focus:outline-none`}
//             onClick={() => handleTabClick(2)}
//           >
//             <span className="text-center">Tab 2</span>
//           </button>
//           <button
//             className={`flex-1 py-2 px-3 rounded-md ${
//               activeTab === 3
//                 ? "bg-blue-800 text-white m-1"
//                 : "m-1 bg-gray-300 hover:bg-blue-200"
//             } focus:outline-none mr-1`}
//             onClick={() => handleTabClick(3)}
//           >
//             <span className="text-center">Tab 3</span>
//           </button>
//         </div>
//       </div>
//       <div>
//         {activeTab === 1 && <div className="sticky top-0">{sidebarLeft}</div>}
//         {activeTab === 2 && (
//           <div className="col-span-2 border-gray-200 dark:border-gray-700 px-2">
//             {main}
//           </div>
//         )}
//         {activeTab === 3 && <div className="sticky top-0">{sidebarRight}</div>}
//       </div>

//       <div className="md:container md:mx-auto">
//         {/* <TabComponent /> */}
//         <div className="grid grid-cols-4 gap-4 font-mono rounded-lg">
//           <div className="p-2">
//             <div className="sticky top-0">{sidebarLeft}</div>
//           </div>
//           <div className="col-span-2 border-gray-200 dark:border-gray-700">
//             {main}
//           </div>

//           <div className="p-2">
//             <div className="sticky top-0">{sidebarRight}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
