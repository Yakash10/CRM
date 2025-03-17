



import React, { useState } from "react";

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
];

const Apartments = () => {
  const [selectedType, setSelectedType] = useState("Apartments");

  const filteredProjects = allProjects.filter(
    (project) => project.type === selectedType
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Explore Properties That Suit Your Lifestyle
      </h2>
      <div className="flex space-x-4 mb-6">
        {propertyTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border ${
              selectedType === type
                ? "bg-orange-500 text-white"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden relative w-64 h-80 mx-auto"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments;