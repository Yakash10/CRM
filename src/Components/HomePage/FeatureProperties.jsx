



import React, { useState } from "react";
import properties1 from "../HomePage/Assets/properties1.png";
import properties2 from "../HomePage/Assets/properties2.png";
import properties3 from "../HomePage/Assets/properties3.png";
import { useNavigate } from "react-router-dom";

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
      image: properties2,
      city: "Hyderabad",
      beds: "5",
      bath: "6",
    },
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      image: properties3,
      city: "Hyderabad",
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
      ? properties
      : properties.filter((property) => property.city === activeCity);

  return (
    <div className="bg-black text-white mt-2 p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <p className="text-sm text-gray-400">Featured properties</p>
          <h2 className="text-2xl font-semibold">
            Consolidation of 'exclusive' properties in your city
          </h2>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0">
          View all
        </button>
      </div>

      {/* City Filter (Scrollable on smaller screens) */}
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {cities.map((city) => (
          <button onClick={() => navigate("/property")}
            key={city}
            className={`px-4 py-2 whitespace-nowrap rounded-full ${
              activeCity === city
                ? "bg-white text-black"
                : "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
            }`}
            // onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-400 mb-2">{property.price}</p>
              <div className="flex items-center mb-2">
                <span className="text-gray-400">{property.city}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>{property.beds} Beds</span>
                <span>{property.bath} Bath</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6">
        <div className="w-3 h-3 bg-gray-600 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

