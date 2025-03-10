import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineApartment } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import highlightsbackground from "../HomePage/Assets/highlightsbackground.png";
import Avenuepark from "../HomePage/Assets/Avenuepark.png";

const PropertyHighlights = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute inset-0">
        <img
          src={highlightsbackground}
          alt="Casagrand Avenuepark"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <img src={Avenuepark} alt="Casagrand Avenuepark" className="h-12" />
          </div>
          <h1 className="text-4xl font-bold">Casagrand Avenuepark highlight</h1>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg shadow-lg">
            Explore properties
          </button>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full bg-white py-6 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <FaSearchLocation className="text-gray-600" />
            <span>Chennai</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineApartment className="text-gray-600" />
            <span>Apartment</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosPricetag className="text-gray-600" />
            <span>2cr - 5cr</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md">
            Search
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PropertyHighlights;
