import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Avenuepark from "../HomePage/Assets/Avenuepark.png";
import offer from "../HomePage/Assets/offer.png";
import slide1 from "../HomePage/Assets/slide1.jpg";
import slide2 from "../HomePage/Assets/slide2.webp";
import slide3 from "../HomePage/Assets/slide3.webp";
import slide4 from "../HomePage/Assets/slide4.webp";
import highlightsline from "../BuilderInnerPage/Assets/highlightsline.png";


const images = [slide1, slide2, slide3, slide4];

const PropertyHighlights = () => {
  const [activeTab, setActiveTab] = useState("RENT");
  const [location, setLocation] = useState("Chennai");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [priceRange, setPriceRange] = useState("2Cr-5Cr");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Image Slider */}
      <img
        src={images[currentImage]}
        alt="Property highlight"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Logo */}
      <div className="absolute top-5 left-5 md:top-10 md:left-16 bg-white p-2 md:p-3 rounded-md shadow-lg">
        <img
          src={Avenuepark}
          alt="Casagrand Avenuepark Logo"
          className="w-24 md:w-32 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="absolute top-24 left-5 md:top-40 md:left-16 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Casagrand Avenuepark <br /> highlight
        </h1>
        <button className="mt-4 px-4 py-2 md:px-6 md:py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition">
          Explore properties
        </button>
        <img src={highlightsline} alt="" className="mt-8"/>
      </div>

      {/* Offer Badge (Bottom Right) */}
      <div className="absolute bottom-24 right-5 md:bottom-28 md:right-10 w-24 md:w-auto">
        <img src={offer} alt="Offer Badge" />
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[900px] bg-white shadow-xl rounded-tr-lg rounded-bl-lg rounded-br-lg p-4">
        {/* Tabs */}
        <div className="absolute -top-9 left-0 md:left-0 flex space-x-4 md:space-x-6 text-xs md:text-sm font-semibold">
          {["RENT", "BUY", "SELL"].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer px-4 py-2 rounded-tr-lg rounded-tl-lg border-b-2 transition-all ${
                activeTab === tab
                  ? "bg-white text-black shadow-md"
                  : "text-white opacity-70 border-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Search Bar Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-4">
          {/* Location Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Location
            </label>
            <select
              className="text-gray-500 text-xs md:text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          {/* Property Type Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Property Type
            </label>
            <select
              className="text-gray-500 text-xs md:text-sm"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Independent House">Independent House</option>
            </select>
          </div>

          {/* Price Range Section */}
          <div className="flex flex-col text-center md:text-left">
            <label className="text-gray-700 text-xs md:text-sm font-semibold">
              Price Range
            </label>
            <select
              className="text-gray-500 text-xs md:text-sm"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="50L-1Cr">50L-1Cr</option>
              <option value="1Cr-2Cr">1Cr-2Cr</option>
              <option value="2Cr-5Cr">2Cr-5Cr</option>
            </select>
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
