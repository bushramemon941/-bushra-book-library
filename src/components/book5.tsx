"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./../style/book.css";
import bookCover from "../../public/image/book5.jpg";

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
          />
          <button onClick={handleSearch}>Search</button>
          <label>
            <input type="checkbox" /> Enable Suggestion
          </label>
        </div>
      </header>

      {/* Categories */}
      <nav className="categories">
        <a href="#">Recommended books</a>
        <a href="#">History,</a>
        <a href="#">Fiction</a>
        <a href="#">Accessible book,</a>
        <a href="#">Protected DAISY,</a>
        <a href="#">Classic Literature,</a>
        <a href="#">OverDrive,</a>
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title">The Man In The Iron Mask</h2>
          <p className="book-author">Alexandre Dumas</p>
          <p className="book-description">
            A simple retelling of the four Musketeers' final adventure during
            which they plot to replace King Louis&#39; XIV of France with the
            mysterious, masked prisoner in the Bastille believed to be Louis&#39;
            falsely imprisoned twin brother and the true king.
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
