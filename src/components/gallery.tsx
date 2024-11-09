"use client";
import "../style/gallery.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Static imports for images
import theLoneDrowImage from "../../public/image/thelonedrow.jpg";
import theChannelingImage from "../../public/image/thechanneling.jpg";
import book3Image from "../../public/image/book3.jpg";
import book4Image from "../../public/image/book4.jpg";
import book5Image from "../../public/image/book5.jpg";
import book6Image from "../../public/image/book6.jpg";

const Gallery = () => {
  return (
    <div id="book">
      <section className="text-red-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl md:text-5xl font-medium title-font mb-4 text-red-950">
              Book Gallery
            </h1>
          </div>

          {/* Responsive grid for gallery items */}
          <div className="flex flex-wrap justify-center -m-4">
            {/* 1st Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="The Lone Drow book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={theLoneDrowImage}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3 text-red-950">
                      The Lone Drow
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      Alone on the battlefield. Surrounded by death. Cornered by enemies. And ready to die.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="The Channeling Zone book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={theChannelingImage}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3">
                      The Channeling Zone
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      Neither a debunker nor an advocate, Brown weaves together the opinions and life stories of practicing channels and their clients to bring their world and its assumptions into higher relief.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book2"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="Writings of Charles S. Peirce book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={book3Image}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3">
                      Writings of Charles S. Peirce
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      This series contains large sections of previously unpublished material in addition to selected published works.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book3"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="The Phantom of the Opera book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={book4Image}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3">
                      The Phantom of the Opera
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      Christine is brought up by her itinerant musician father, whose death she mourns endlessly.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book4"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat the same structure for the 5th and 6th books */}
            {/* 5th Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="The Man in the Iron Mask book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={book5Image}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3">
                      The Man in the Iron Mask
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      A simple retelling of the four Musketeers' final adventure during which they plot to replace the King.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book5"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6th Book */}
            <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="pic mx-auto">
                <div className="inner">
                  <div className="front">
                    <Image
                      alt="The Mark of Athena book cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={book6Image}
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                    <h1 className="title-font text-2xl font-medium text-center mb-3">
                      The Mark of Athena
                    </h1>
                    <p className="font-serif leading-relaxed text-center">
                      "The Greek and Roman demigods will have to cooperate in order to defeat the giants released by the Earth."
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link target="_blank" href={"/book6"}>
                        <p className="p-2 text-center border-2 border-red-300 text-white font-bold hover:scale-105 duration-300 ease hover:bg-red-950 hover:text-white rounded">
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
