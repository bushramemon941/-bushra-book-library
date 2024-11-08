

"use client";
import  "../style/gallery.css";

import Link from "next/link";
import React from "react";
import Image from "next/image";

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
        {/* book-1*/}
        <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/thelonedrow.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                <h1 className="title-font text-2xl font-medium text-center mb-3 text-red-950">
                The lone drow
                </h1>
                <p className="font-serif leading-relaxed text-center ">
                Alone on the battlefield.Surrounded by death.Cornered by enemies.And ready to die.
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
{/* 2nd */}
<div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/thechanneling.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
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
        {/* 3rd */}
        <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/book3.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
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
        {/* 4th */}
        <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/book4.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                <h1 className="title-font text-2xl font-medium text-center mb-3">
                The phantom of the Opera
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
        {/* 5th */}
        <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/book5.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                <h1 className="title-font text-2xl font-medium text-center mb-3">
                The man in the iron mask
                </h1>
                <p className="font-serif leading-relaxed text-center">
                A simple retelling of the four Musketeers' final adventure during which they plot to replace King
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
        {/* 6th */}
        <div className="box lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="pic mx-auto">
            <div className="inner">
              <div className="front">
                <Image
                  alt="book Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={require("../../public/image/book6.jpg")}
                />
              </div>
              <div className="px-8 py-10 relative z-10 w-full  hover:opacity-100 back flex flex-col justify-between h-full bg-gray-800 text-white rounded">
                <h1 className="title-font text-2xl font-medium text-center mb-3">
                The Mark of Athena
                </h1>
                <p className="font-serif leading-relaxed text-center">
                "The Greek and Roman demigods will have to cooperate in order to defeat the giants released by the Earth
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
        {/* Repeat for other book as needed */}
      </div>
    </div>
  </section>
</div>
    
  );
};

export default Gallery;
