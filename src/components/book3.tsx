"use client";
import React from "react";
import Image from "next/image";
import "./../style/book.css";
import { useState } from "react";
import bookCover from "../../public/image/book3.jpg";

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
        <a href="#"> Philosophy,</a>
        <a href="#"> Modern</a>
        <a href="#"> History & Surveys</a>
        <a href="#"> collected works</a>
        <a href="#"> Logique, Philosophy,</a>
        <a href="#"> 1839-1914</a>
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title">Writings of Charles S. Peirce</h2>
          <p className="book-author"> Charles Sanders Peirce</p>
          <p className="book-description">
            This series contains large sections of previously unpublished
            material in addition to selected published works. Each volume
            includes a brief historical and biographical introduction, extensive
            editorial and textual notes, and a full chronological list of all of
            Peirce's writings, published and unpublished, during the period
            covered.
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
