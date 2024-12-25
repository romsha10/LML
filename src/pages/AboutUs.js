import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar component is already created

const AboutUs = () => {
  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Add Navbar here */}
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">About Us</h1>
        <p className="text-[#4538a7] text-xl mt-4">
          We are dedicated to providing top-notch educational content.
        </p>
      </header>
      {/* Main Content Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-[#3b3092] text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-[#4538a7] text-lg mb-6">
            Our mission is to make learning easy and accessible for everyone. We
            strive to provide high-quality tutorials, notes, and subjects across
            various educational fields to help students succeed.
          </p>

          <h2 className="text-[#3b3092] text-2xl font-semibold mb-4">
            Our Team
          </h2>
          <p className="text-[#4538a7] text-lg mb-6">
            Our team consists of passionate educators and content creators who
            are committed to delivering engaging and informative learning
            resources.
          </p>

          <h2 className="text-[#3b3092] text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-[#4538a7]">
            <li>Comprehensive educational content</li>
            <li>Expert tutorials and notes</li>
            <li>Easy-to-follow video tutorials</li>
            <li>Available on all devices</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
