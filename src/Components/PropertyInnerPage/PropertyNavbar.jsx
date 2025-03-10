



import React, { useState } from "react";
import abvlogo from "../HomePage/Assets/logo.png";

export default function PropertyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <img src={abvlogo} alt="ABV Logo" className="h-8 mr-2" />
          ABV
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-orange-500">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Why us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Properties
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact us
            </a>
          </li>
        </ul>

        {/* Enquiry Button (Always Visible) */}
        <div className="hidden md:block">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            Enquiry now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-200 mt-2 p-4 space-y-3 text-center text-gray-700">
          <li>
            <a href="#" className="hover:text-orange-500">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Why us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Properties
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact us
            </a>
          </li>
          <li>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
              Enquiry now
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
