import React from "react";
import Search from "./Search";

function Header({ onSearchSubmit }) {
  return (
    <nav class="bg-white h-8 border-gray-200 h-full dark:bg-gray-900">
      <div className="md:container md:mx-auto">
        <div class="grid grid-cols-4 gap-4 font-mono rounded-lg">
          <div class="flex items-center justify-center px-4">
            <NavLogo />
            {/* 01 */}
          </div>
          <div class="col-span-2 border-gray-200 dark:border-gray-700 p-2">
            <Search onSubmit={(query) => onSearchSubmit(query)} />
            {/* 02 */}
          </div>
          <div class="flex items-center justify-center px-4">
            <NavLinks />
            {/* 03 */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

function NavLogo() {
  return (
    <a href="https://flowbite.com/" class="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        NewsFlash
      </span>
    </a>
  );
}

function NavLinks() {
  return (
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          aria-current="page"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Services
        </a>
      </li>
    </ul>
  );
}
