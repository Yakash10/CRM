

import React, { useState } from "react";
import top1 from "../HomePage/Assets/top1.png";
import top2 from "../HomePage/Assets/top2.png";
import top3 from "../HomePage/Assets/top3.png";

const apartments = [
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    features: "Private Beach Access",
    final: ["Sqft: 3567", "5 Beds", "6 Bath"],
    location: "Palm Jumeirah, Dubai",
    image: top3,
  },
  {
    name: "Bouganville",
    price: "₹1.49cr - ₹1.54cr",
    features: "Private Beach Access",
    final: ["Sqft: 3567", "5 Beds", "6 Bath"],
    location: "Downtown Dubai",
    image: top2,
  },
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    features: "Private Beach Access",
    final: ["Sqft: 3567", "5 Beds", "6 Bath"],
    location: "Palm Jumeirah, Dubai",
    image: top1,
  },
  {
    name: "Luxury Villa in Palm Jumeirah",
    price: "₹20,00,000",
    features: "Private Beach Access",
    final: ["Sqft: 3567", "5 Beds", "6 Bath"],
    location: "Palm Jumeirah, Dubai",
    image: top1,
  },
];

const MoreProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 apartments at a time

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? apartments.length - itemsPerPage : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= apartments.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">More Properties</h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          View all
        </button>
      </div>

      {/* Apartment Grid for Full Width */}
      <div className="grid grid-cols-3 gap-6 w-full">
        {apartments
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((apartment, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full"
            >
              <img
                src={apartment.image}
                alt={apartment.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{apartment.name}</h2>
                <p className="text-lg text-red-600 font-semibold">
                  {apartment.price}
                </p>
                <p className="text-sm text-gray-500">📍 {apartment.location}</p>
                <p className="mt-2 text-sm text-gray-600">
                  🔹 {apartment.features}
                </p>

                {/* ✅ Final Section in Flex Row */}
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  {apartment.final.map((feature, i) => (
                    <span key={i} className="flex items-center gap-1">
                      🔹 {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-200 px-4 py-2 rounded shadow-md"
        >
          &larr; Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-200 px-4 py-2 rounded shadow-md"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default MoreProperties;
