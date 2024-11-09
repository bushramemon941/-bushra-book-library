"use client";
import React from "react";
import Image from "next/image";
import "../style/about.css";
import Link from "next/link";
import aboutImage from "../../public/image/about.webp";

function About() {
  return (
    <section className="body-about">
      <div
        id="about"
        className="container mx-auto flex px-3 md:px-5 py-24 md:flex-row flex-col items-center"
      >
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-[40%] w-5/6 mb-10 md:mb-0 relative h-64">
          <Image src={aboutImage} alt="Book Cover" width={500} height={500} />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-[60%] lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-950">
            About Us
          </h1>
          <p className="font mb-8 leading-relaxed text-left">
            Welcome to our library! It is a welcoming space for readers and learners of all ages. We offer a diverse collection of books, digital resources, and programs designed to inspire, educate, and connect our community. Whether you&apos;re here to read, study, or attend an event, this is your place to explore, learn, and grow.
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
              <button className="button inline-flex bg-black border-0 py-2 px-6 focus:outline-none rounded text-lg text-white">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
