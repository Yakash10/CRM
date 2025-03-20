




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Apartment1 from "../HomePage/Assets/Apartment1.png";
import Apartment2 from "../HomePage/Assets/Apartment2.png";
import Apartment3 from "../HomePage/Assets/Apartment3.png";

const propertyTypes = ["Apartments", "Villas", "Plots", "Land"];

const allProjects = [
  {
    image: Apartment1,
    name: "Casagrand",
    type: "Apartments",
    beds: 3,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment2,
    name: "Radiance",
    type: "Apartments",
    beds: 3,
    baths: 3,
    kitchens: 1,
  },
  {
    image: Apartment3,
    name: "Realtor",
    type: "Apartments",
    beds: 2,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment1,
    name: "Casagrand",
    type: "Apartments",
    beds: 3,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment2,
    name: "Radiance",
    type: "Apartments",
    beds: 3,
    baths: 3,
    kitchens: 1,
  },
  {
    image: Apartment3,
    name: "Realtor",
    type: "Apartments",
    beds: 2,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment1,
    name: "Casagrand",
    type: "Apartments",
    beds: 3,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment2,
    name: "Radiance",
    type: "Apartments",
    beds: 3,
    baths: 3,
    kitchens: 1,
  },
  {
    image: Apartment3,
    name: "Realtor",
    type: "Apartments",
    beds: 2,
    baths: 2,
    kitchens: 1,
  },
  {
    image: Apartment3,
    name: "Realtor",
    type: "Apartments",
    beds: 2,
    baths: 2,
    kitchens: 1,
  },
];

const Apartments = () => {
  const [selectedType, setSelectedType] = useState("Apartments");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = allProjects.filter(
    (project) => project.type === selectedType
  );
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const handleCardClick = (project) => {
    if (project.name === "Casagrand") {
      navigate("/builder");
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Explore Properties That Suit Your Lifestyle
        </h2>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold transition hover:bg-orange-600"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Property Type Buttons */}
      <div className="flex space-x-4 mb-6">
        {propertyTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedType === type
                ? "bg-orange-500 text-white scale-110"
                : "border-gray-300 hover:scale-105"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(project)}
              className={`rounded-lg shadow-md overflow-hidden relative w-64 h-80 mx-auto ${
                project.name === "Casagrand" ? "cursor-pointer" : ""
              }`}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Apartments;
