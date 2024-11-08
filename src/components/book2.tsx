"use client"
import React from 'react'
import Image from 'next/image'
import './../style/book.css'
import { useState } from "react";
import bookCover from "../../public/image/thechanneling.jpg"; 





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
        <a href="#">Channeling (Spiritualism)</a>
        <a href="#">Channeling (Nouvel âge),</a>
        <a href="#">Religion,</a>
        <a href="#"> Spiritisme</a>
        <a href="#"> Nouvel âge (mouvement),</a>
        <a href="#">   History</a>
      
      </nav>

      {/* Book Display Section */}
      <div className="book-display">
        <Image src={bookCover} alt="Book Cover" width={150} height={200} />
        <div className="book-details">
          <h2 className="book-title">The Channeling Zone</h2>
          <p className="book-author">Michael F. Brown
          </p>
          <p className="book-description">
          Neither a debunker nor an advocate, Brown weaves together the opinions and life stories of practicing channels and their clients to bring their world and its assumptions into higher relief. He describes the experiences that lead often highly educated, middle-class Americans to conclude the useful information is filtered through the spirit world.

He pursues the nature of the quest - the fears, hopes, and expectations of the seekers - and finds its roots in traditional American notions of individualism and self-perfection. The Channeling Zone is a lively journey into the complex social world of the thousands of Americans who have abandoned mainstream religions in search of direct and improvisational contact with spiritual beings.
          </p>
          <div className="book-links">
            <a href="#">Search</a> | <a href="#">Find on Amazon</a>
          </div>
        </div>
      </div>

     
    </div>
 
  )
}

export default Book;
