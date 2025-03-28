import React from "react";
import { motion } from "framer-motion";
import top1 from "../HomePage/Assets/top1.png";
import top2 from "../HomePage/Assets/top2.png";
import top3 from "../HomePage/Assets/top3.png";
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
    image: top3,
  },
  {
    name: "Bouganville",
    price: "₹1.49cr - ₹1.54cr",
    sqft: "3567",
    beds: "5 Beds",
    baths: "6 Bath",
    location: "Downtown Dubai",
    image: top2,
  },
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    sqft: "3567",
    beds: "5 Beds",
    baths: "6 Bath",
    location: "Palm Jumeirah, Dubai",
    image: top1,
  },
  {
    name: "Modern Apartment in Marina",
    price: "₹18,50,000",
    sqft: "3200",
    beds: "4 Beds",
    baths: "5 Bath",
    location: "Dubai Marina, Dubai",
    image: top1,
  },
];

const MoreProperties = () => {
  return (
    <div className="relative w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">More properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {apartments.map((apartment, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden w-full"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img
              src={apartment.image}
              alt={apartment.name}
              className="w-full h-40 sm:h-48 lg:w-[300px]  rounded-md md:h-60  object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{apartment.name}</h2>
              <p className="text-lg mt-1 text-red-600 font-semibold">
                {apartment.price}
              </p>
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
    </div>
  );
};

export default MoreProperties;
