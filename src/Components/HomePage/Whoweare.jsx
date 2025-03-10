


import React from "react";
import whoweare from "./Assets/whoweare.png";


const Whoweare = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="flex flex-col md:flex-row items-center gap-20">
        {/* Left Section */}
        <div className="md:w-1/2"> 
          <p className="text-gray-500 text-sm mb-2">• Who We Are</p>
          <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
            Your trusted partner in real estate, connecting you to premium
            properties across prime locations. Whether you’re looking for luxury
            apartments, affordable homes, commercial spaces, or investment
            opportunities,
          </p>
          <button className="bg-orange-500 text-white font-medium py-2 px-4 mt-5 rounded-md">
            Know more
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2">
          <img
            src={whoweare}
            alt="Real Estate Building"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;




