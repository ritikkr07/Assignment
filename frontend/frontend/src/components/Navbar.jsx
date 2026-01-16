import React from "react";
import logo from "../assets/react.svg"; // <-- apna logo yaha se

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Center - Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#">About</a>
            <a href="#">Training Centers</a>
            <a href="#">Blogs</a>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-1.5 border rounded-md text-sm">
              Login
            </button>
            <button className="px-4 py-1.5 bg-black text-white rounded-md text-sm">
              Register
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
