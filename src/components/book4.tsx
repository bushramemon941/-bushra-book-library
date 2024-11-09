"use client";
import React from "react";
import Image from "next/image";
import "./../style/book.css";
import { useState } from "react";
import bookCover from "../../public/image/book4.jpg";

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
        <a href="#"> Fiction, </a>
        <a href="#"> Opera, </a>
        <a href="#"> Composers, </a>
        <a href="#"> Phantom of the Opera (Fictitious character), </a>
        <a href="#"> Readers,</a>
        <a href="#"> English language</a>
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title"> The phantom of the Opera</h2>
          <p className="book-author">Gaston Leroux</p>
          <p className="book-description">
            Christine is brought up by her itinerant musician father, whose
            death she mourns endlessly. She achieves a singing position in the
            Paris Opera line, where a mysterious voice teaches her to unleash
            her musical potential. The voice belongs to Erik, a deformed musical
            genius who lives in the opera house. As Christine's singing career
            takes off, her childhood friend Raoul begins to court her, and he
            and Erik fight jealously for Christine's hand.
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
