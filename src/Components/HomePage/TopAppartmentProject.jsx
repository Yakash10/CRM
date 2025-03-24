import React, { useState } from "react";
import { motion } from "framer-motion";
import slide1 from "../HomePage/Assets/slide1.jpg";
import slide2 from "../HomePage/Assets/slide2.webp";
import slide3 from "../HomePage/Assets/slide3.webp";
// import top2 from "../HomePage/Assets/top2.png";
// import top3 from "../HomePage/Assets/top3.png";
import location1 from "../HomePage/Assets/location1.png";
import sqft from "../HomePage/Assets/sqft.png";
import bed from "../HomePage/Assets/bed.png";
import bath from "../HomePage/Assets/bath.png";

const apartments = [
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    sqft: "3567",
    beds: "5 Beds",
    baths: "6 Bath",
    location: "Palm Jumeirah, Dubai",
    image: slide1,
  },
  {
    name: "Bouganville",
    price: "₹1.49cr - ₹1.54cr",
    sqft: "3567",
    beds: "5 Beds",
    baths: "6 Bath",
    location: "Downtown Dubai",
    image: slide2,
  },
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    sqft: "3567",
    beds: "5 Beds",
    baths: "6 Bath",
    location: "Palm Jumeirah, Dubai",
    image: slide3,
  },
];

const TopApartmentProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? apartments.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= apartments.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="relative w-full mx-auto px-10 p-4"> {/* Added left and right padding */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Top Apartment Projects</h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">View All</button>
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="absolute z-10 bg-white p-3 rounded-full shadow-md text-xl font-bold border border-gray-300"
          style={{ top: "50%", transform: "translateY(-50%)", left: "-30px" }}
        >
          &#8592;
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto"> {/* Reduced width */}
          {apartments.slice(currentIndex, currentIndex + itemsPerPage).map((apartment, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden w-[90%] mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={apartment.image}
                alt={apartment.name}
                className="w-full h-40 sm:h-48 md:h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{apartment.name}</h2>
                <p className="text-lg mt-1 text-red-600 font-semibold">{apartment.price}</p>
                <p className="text-sm mt-1 text-gray-500 flex items-center gap-2">
                  <img src={location1} alt="Location" className="w-4 h-4" />
                  {apartment.location}
                </p>
                <p className="border-b p-2"></p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <img src={sqft} alt="Size Icon" className="w-4 h-4" />
                    {apartment.sqft} Sqft
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={bed} alt="Bed Icon" className="w-4 h-4" />
                    {apartment.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={bath} alt="Bath Icon" className="w-4 h-4" />
                    {apartment.baths}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute z-10 bg-white p-3 rounded-full shadow-md text-xl font-bold border border-gray-300"
          style={{ top: "50%", transform: "translateY(-60%)", right: "-30px" }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TopApartmentProject;