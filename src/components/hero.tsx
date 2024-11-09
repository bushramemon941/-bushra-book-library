"use client";
import "../style/hero.css";

import React, { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <section className="body">
      <div className="container mx-auto flex md:px-3 py-24 md:py-28 md:flex-row flex-col-reverse items-center">
        <div className="animate pl-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-300">
            Welcome To, My Book
            <span className="book text-slate-200"> Library</span>
          </h2>

          <div className="w-[300px] h-[2px] bg-white mb-8"></div>

          {/* Search Bar Section */}
          <div className="flex justify-center w-full">
            <div className="flex items-center border border-gray-300 rounded-md shadow-lg">
              <input
                type="text"
                placeholder="Search for books, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full rounded-1-md focus:outline-none text-gray-700"
              />
              <button
                onClick={handleSearch}
                className="bg-white text-white p-2 rounded-r-md hover:bg-red-700 transition duration-300 ease-in-out"
              >
                🔍
              </button>
            </div>
          </div>
          {/* End of Search Bar Section */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
