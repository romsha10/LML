import React, { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import { Link } from "react-router-dom";

const tutorials = [
  {
    title: "Introduction to Algebra",
    description: "Master the basics of algebra with this comprehensive guide.",
  },
  {
    title: "Physics for Beginners",
    description: "Dive into the world of physics with easy-to-follow lessons.",
  },
  {
    title: "Creative Writing Skills",
    description: "Enhance your storytelling and writing abilities.",
  },
  {
    title: "Web Development Basics",
    description: "Learn how to build responsive websites from scratch.",
  },
  {
    title: "Data Science 101",
    description: "Get introduced to the world of data science and analytics.",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate the number of slides (2 tutorials per slide)
  const slidesCount = Math.ceil(tutorials.length / 2);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Add Navbar here */}
      {/* Banner Section */}
      <section className="relative">
        <img
          src="/image.png"
          alt="Banner"
          className="w-full h-[400px] object-cover rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]"
        />
      </section>
      {/* Main Content */}
      <header className="text-center py-20">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Welcome to Little More Learning
        </h1>
        <p className="text-[#4538a7] text-xl mt-4">
          Your one-stop solution for Quality Education Resources!
        </p>
      </header>
      {/* Clickable Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 py-16">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#3b3092] text-xl font-semibold mb-4">Videos</h3>
          <p className="text-[#4538a7] mb-4">
            Explore our educational videos for all subjects and levels.
          </p>
          <Link
            to="/videos"
            className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
          >
            Explore Now
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#3b3092] text-xl font-semibold mb-4">Notes</h3>
          <p className="text-[#4538a7] mb-4">
            Download study notes in PDF format for various subjects.
          </p>
          <Link
            to="/notes"
            className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
          >
            Explore Now
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#3b3092] text-xl font-semibold mb-4">
            Tutorials
          </h3>
          <p className="text-[#4538a7] mb-4">
            Learn through step-by-step tutorials created by experts.
          </p>
          <Link
            to="/tutorials"
            className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
          >
            Explore Now
          </Link>
        </div>
      </section>
      {/* Tutorials Slider Section */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-[#3b3092] text-3xl font-semibold text-center mb-8">
          Explore Our Tutorials
        </h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Slider Content */}
          <div className="flex space-x-6 overflow-hidden">
            {tutorials
              .slice(currentSlide * 2, currentSlide * 2 + 2)
              .map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-[#3b3092] text-white p-6 rounded-lg shadow-lg w-1/2"
                >
                  <h3 className="text-xl font-bold">{tutorial.title}</h3>
                  <p className="mt-4">{tutorial.description}</p>
                </div>
              ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevSlide}
              className="bg-[#4538a7] text-white px-4 py-2 rounded-full hover:bg-[#ff3131]"
            >
              Previous
            </button>
            <button
              onClick={handleNextSlide}
              className="bg-[#4538a7] text-white px-4 py-2 rounded-full hover:bg-[#ff3131]"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      {/* YouTube Subscribe Section */}
      <section className="px-6 py-16 bg-[#3b3092] text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Subscribe to Our YouTube Channel
        </h2>
        <p className="mb-8">
          Stay updated with the latest educational videos and tutorials. Click
          below to subscribe!
        </p>
        <a
          href="https://www.youtube.com/channel/yourchannelid"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff3131] text-white px-6 py-3 rounded-full hover:bg-[#d42a2a]"
        >
          Subscribe
        </a>
      </section>
    </div>
  );
};

export default HomePage;
