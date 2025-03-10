




import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import abvlogo from "../HomePage/Assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <img src={abvlogo} alt="ABV Logo" className="h-8 mr-2" />
        ABV
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex space-x-6 text-gray-700 absolute md:static top-16 left-0 w-full bg-gray-100 md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-transform transform ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li>
          <a href="#" className="hover:text-orange-500 block py-2 px-4 md:p-0">
            Apartments
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500 block py-2 px-4 md:p-0">
            Individual house
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500 block py-2 px-4 md:p-0">
            Ongoing projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500 block py-2 px-4 md:p-0">
            Contact us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500 block py-2 px-4 md:p-0">
            Blogs
          </a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-100">
          Post your property
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Login
        </button>
      </div>
    </nav>
  );
}
