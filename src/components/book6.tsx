"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./../style/book.css";
import bookCover from "../../public/image/book6.jpg";

const Book = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Function to handle search, e.g., filter books based on searchQuery
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
        <a href="#">Greek Gods,</a>
        <a href="#">Percy Jackson</a>
        <a href="#">Annabeth Chase,</a>
        <a href="#">Jason Grace,</a>
        <a href="#">Leo Valdez,</a>
        <a href="#">Frank,</a>
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title">The Mark of Athena</h2>
          <p className="book-author">Rick Riordan</p>
          <p className="book-description">
            &ldquo;The Greek and Roman demigods will have to cooperate in order to
            defeat the giants released by the Earth Mother, Gaea. Then they will
            have to sail together to the ancient land&mdash;Greece itself&mdash;to find
            the Doors of Death&rdquo;
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
