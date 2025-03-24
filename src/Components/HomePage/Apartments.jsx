import React from "react";
import { FaBed, FaBath, FaUtensils } from "react-icons/fa";

// Local images/logos (adjust paths as needed)
import image3 from "../HomePage/Assets/image3.jpg";
import image2 from "../HomePage/Assets/image2.jpg";
import imagee1 from "../HomePage/Assets/imagee1.jpg";
// import Avenuepark from "../Homepage/Assets/Avenuepark.png";
import arunexcello from "../HomePage/Assets/arunexcello.png";
import radiencelogo from "../HomePage/Assets/radiencelogo.png";
import { useNavigate } from "react-router-dom";
// Your existing data array
 
const cardData = [
 
  {
    id: 1,
    brandName: "Casagrand AvenuePark",
    propertyName: "Casagrand Suncity",
    backgroundImage: imagee1,
    logo: radiencelogo,
  },
  {
    id: 2,
    brandName: "Radiance Realty",
    propertyName: "Arunexcello",
    backgroundImage: image3,
    logo: arunexcello,
  },
  {
    id: 3,
    brandName: "Realtor.com",
    propertyName: "Radience",
    backgroundImage: image2,
    logo: radiencelogo,
  },
  {
    id: 4,
    brandName: "Casagrand AvenuePark",
    propertyName: "Casagrand Suncity",
    backgroundImage: image2,
    logo: radiencelogo,
  },
  {
    id: 5,
    brandName: "Radiance Realty",
    propertyName: "Arunexcello",
    backgroundImage: image3,
    logo: arunexcello,
  },
  {
    id: 6,
    brandName: "Realtor.com",
    propertyName: "Radience",
    backgroundImage: imagee1,
    logo: radiencelogo,
  },
];

export default function Cards() {
  const navigate=useNavigate();
  return (
    <div
      className="
        max-w-6xl mx-auto px-4 py-8 mt-16
        font-poppins   /* Use if you've configured Tailwind to include 'poppins' */
      "
      // OR inline style if not using the Tailwind config:
      // style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* 
        1) Header Section Above the Cards
           - Title + filter buttons on the left
           - "View All" button on the right
      */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        {/* Left side: Title + Filter Buttons */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Explore Properties That Suit Your Lifestyle
          </h2>
          <div className="flex gap-2">
            {/* Filter Buttons (clickable) */}
            <button
              className="
                border border-orange-500 text-orange-500 
                px-4 py-1 rounded-full hover:bg-orange-100 
                transition cursor-pointer
              "
              onClick={() => console.log("Apartments clicked")}
            >
              Apartments
            </button>
            <button
              className="
                border border-gray-400 text-gray-600 
                px-4 py-1 rounded-full hover:bg-gray-100 
                transition cursor-pointer
              "
              onClick={() => console.log("Villas clicked")}
            >
              Villas
            </button>
            <button
              className="
                border border-gray-400 text-gray-600 
                px-4 py-1 rounded-full hover:bg-gray-100 
                transition cursor-pointer
              "
              onClick={() => console.log("Plots clicked")}
            >
              Plots
            </button>
            <button
              className="
                border border-gray-400 text-gray-600 
                px-4 py-1 rounded-full hover:bg-gray-100 
                transition cursor-pointer
              "
              onClick={() => console.log("Land clicked")}
            >
              Land
            </button>
          </div>
        </div>

        {/* Right side: "View All" button */}
        <button
          className="
            bg-orange-500 text-white px-5 py-2 rounded 
            hover:bg-orange-600 transition cursor-pointer
          "
          onClick={() => console.log("View All clicked")}
        >
          View All
        </button>
      </div>

      {/* 
        2) Cards Section
      */}
      <div className="grid md:grid-cols-3 gap-6">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="
              bg-white shadow-md border border-gray-100
              rounded-lg overflow-hidden w-full max-w-sm
              transform transition-all duration-300 ease-in-out
              hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50
              group cursor-pointer
            "
          >
            {/* Top image (relative for diagonal badge + top-right logo) */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.backgroundImage}
                alt={item.propertyName}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Diagonal corner ribbon on the LEFT in yellow */}
              <div
                className="
                  absolute top-3 left-[-40px]
                  transform -rotate-45
                  z-10
                  bg-yellow-500
                  text-white text-xs font-bold uppercase
                  px-8 py-1
                  shadow-md
                "
              >
                New Launch
              </div>

              {/* Logo in the top-right corner of the image */}
              <img
                src={item.logo}
                alt={`${item.brandName} logo`}
                className="absolute top-3 right-3 w-14 h-14 object-contain z-10"
              />
            </div>

            {/* Card content (below image) */}
            <div className="p-4 text-gray-800">
              {/* Property Name */}
              <h2 className="text-lg font-semibold">{item.propertyName}</h2>

              {/* Beds | Bath | Kitchen (with icons) */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                <div className="flex items-center gap-1">
                  <FaBed />
                  <span>3 Beds</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <FaBath />
                  <span>2 Bath</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <FaUtensils />
                  <span>1 Kitchen</span>
                </div>
              </div>

              {/* Second logo below the Beds/Bath/Kitchen line */}
              <div className="mt-4">
                <img
                  src={item.logo}
                  alt={`${item.brandName} logo`}
                  className="w-24 h-auto"
                />
              </div>

              {/* Brochures + View More */}
              <div className="flex justify-between items-center mt-4">
                <select className="text-sm bg-gray-200 p-2 rounded-md cursor-pointer">
                  <option>Brochures</option>
                  {/* Add more <option> if needed */}
                </select>
                <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"onClick={() => navigate("/builder")}>
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
