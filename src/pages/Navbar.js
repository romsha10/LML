import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 #f2daed shadow-md font-semibold mb-4">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-12" />
        <h1 className="text-[#3b3092] text-2xl font-semibold">
          Little More Learning
        </h1>
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="text-[#3b3092] hover:text-[#ff3131]">
          Home
        </Link>
        <Link to="/videos" className="text-[#3b3092] hover:text-[#ff3131]">
          Videos
        </Link>
        <Link to="/notes" className="text-[#3b3092] hover:text-[#ff3131]">
          Notes
        </Link>
        <Link to="/tutorials" className="text-[#3b3092] hover:text-[#ff3131]">
          Tutorials
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
