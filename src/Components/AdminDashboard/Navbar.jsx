import React from "react";
import navprofile from "../AdminDashboard/Assets/navprofile.png";

function Navbar() {
  return (
    <div className="flex items-center mt-2 justify-between p-4 bg-white shadow-md rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg p-2 w-[300px] flex-grow mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Quick Search..."
          className="bg-transparent border-none outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center">
        {/* Notification Icon */}
        <div className="relative mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.158a2.033 2.033 0 01-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></div>
        </div>

        {/* Profile */}
        <button className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <img
            src={navprofile} // Replace with your image path
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm font-medium">Dyan Bruce</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
