import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import properties1 from "../HomePage/Assets/properties1.png";
import Properties2 from "../HomePage/Assets/properties2.png";
import Properties3 from "../HomePage/Assets/properties3.png";
import location1 from "../HomePage/Assets/location1.png";
import bed from "../HomePage/Assets/bed.png";
import bath from "../HomePage/Assets/bath.png";

const FeaturedProperties = () => {
  const [activeCity, setActiveCity] = useState("All");
  const navigate = useNavigate();

  const properties = [
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      image: properties1,
      city: "Hyderabad",
      beds: "5",
      bath: "6",
    },
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      city: "Hyderabad",
      image: Properties2,
      beds: "5",
      bath: "6",
    },
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      image: Properties3,
      city: "Hyderabad",
      beds: "5",
      bath: "6",
    },
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      image: Properties3,
      city: "Chennai",
      beds: "5",
      bath: "6",
    },
  ];

  const cities = [
    "All",
    "Chennai",
    "Bengaluru",
    "Coimbatore",
    "Hyderabad",
    "Singapore",
  ];

  const filteredProperties =
    activeCity === "All"
      ? properties.slice(0, 4) // Show only 4 when "All" is selected
      : properties.filter(
          (property) => property.city.toLowerCase() === activeCity.toLowerCase()
        ); // Show only the selected city

  return (
    <div className="bg-black text-white mt-2 p-6 md:p-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <p className="text-sm text-red-600">Featured properties</p>
          <h2 className="text-2xl font-semibold">
            Consolidation of 'exclusive' properties in your city
          </h2>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 transition duration-300">
          View all
        </button>
      </div>

      {/* City Filter Buttons */}
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {cities.map((city) => (
          <button
            key={city}
            className={`px-4 py-2 whitespace-nowrap rounded-full transition duration-300 ${
              activeCity === city
                ? "bg-white text-black"
                : "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
            }`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 lg:w-[320px] object-cover rounded-md opacity-90 hover:opacity-100 transition duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-red-600 mb-2">{property.price}</p>
              <div className="flex gap-2 items-center mb-2">
                <img
                  src={location1}
                  alt=""
                  className="w-4 h-4 filter invert brightness-75"
                />
                <span className="text-gray-400">{property.city}</span>
              </div>
              <div className="p-2">
                <div className="border-b"></div>
              </div>
              <div className="flex gap-4 text-gray-400">
                <p className="flex gap-2 items-center">
                  <img
                    src={bed}
                    alt=""
                    className="w-5 h-5 filter invert brightness-75"
                  />
                  {property.beds} Beds
                </p>
                <p className="flex gap-2 items-center">
                  <img
                    src={bath}
                    alt=""
                    className="w-5 h-5 filter invert brightness-75"
                  />
                  {property.bath} Bath
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
