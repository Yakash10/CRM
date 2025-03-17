import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../HomePage/Assets/logo.png";
import highlightsbackground from "../HomePage/Assets/highlightsbackground.png";
import offer from "../HomePage/Assets/offer.png";

const PropertyHighlights = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={highlightsbackground}
        alt="Casagrand Avenuepark"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Logo */}
      <div className="absolute top-5 left-5 md:top-10 md:left-16 bg-white p-2 md:p-3 rounded-md shadow-lg">
        <img
          src={logo}
          alt="Casagrand Avenuepark Logo"
          className="w-24 md:w-32 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="absolute top-24 left-5 md:top-40 md:left-16 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Casagrand Avenuepark <br /> highlight
        </h1>
        <button className="mt-4 px-4 py-2 md:px-6 md:py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition">
          Explore properties
        </button>
      </div>

      {/* Offer Badge (Bottom Right) */}
      <div className="absolute bottom-24 right-5 md:bottom-28 md:right-10 w-24 md:w-auto">
        <img src={offer} alt="Offer Badge" />
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[900px] bg-white shadow-xl rounded-2xl p-4">
        {/* Tabs */}
        <div className="absolute -top-5 left-4 md:left-6 flex space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm font-semibold">
          <span className="text-black border-b-2 border-black pb-1 cursor-pointer">
            RENT
          </span>
          <span className="opacity-70 cursor-pointer">BUY</span>
          <span className="opacity-70 cursor-pointer">SELL</span>
        </div>

        {/* Search Bar Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Location Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Location
            </label>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-500">
              <FaMapMarkerAlt size={12} />
              <p className="text-gray-500 text-xs md:text-sm">Chennai</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300 h-10"></div>

          {/* Property Type Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Property Type
            </label>
            <p className="text-gray-500 text-xs md:text-sm">Apartment</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300 h-10"></div>

          {/* Price Range Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Price Range
            </label>
            <p className="text-gray-500 text-xs md:text-sm">2cr-5cr</p>
          </div>

          {/* Search Button */}
          <button className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition">
            <FaSearch size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHighlights;
