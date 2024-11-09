"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./../style/book.css";
import bookCover from "../../public/image/thelonedrow.jpg";

const Book = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="book-search-container">
      {/* Header and Search Bar */}
      <header className="header">
        <h1 className="logo">Free Book Search</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search for a book"
          />
          <button onClick={handleSearch} aria-label="Search button">
            Search
          </button>
          <label>
            <input type="checkbox" /> Enable Suggestion
          </label>
        </div>
      </header>

      {/* Categories */}
      <nav className="categories">
        <a href="#">Recommended books</a>
        <a href="#">Epic Fantasy</a>
        <a href="#">Science Fiction</a>
        <a href="#">Romance</a>
        <a href="#">Drizzt Do&rsquo;Urden</a> {/* Escaped apostrophe */}
        <a href="#">Forgotten Realms</a>
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="The Lone Drow Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title">The Lone Drow</h2>
          <p className="book-author">R. A. Salvatore</p>
          <p className="book-description">
            Alone on the battlefield. Surrounded by death. Cornered by enemies.
            And ready to die. Drizzt Do&rsquo;Urden has become the Hunter, the
            bane of the orc hordes still ravaging the North. Cut off, alone,
            convinced that everything he ever valued has been destroyed, all
            that's left is to kill, and kill, and kill, until there are no enemies
            left. But there are a lot of enemies, and even the Hunter is just one
            lone drow.
          </p>
          <div className="book-links">
            <a href="#">Search</a> | <a href="#">Find on Amazon</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
