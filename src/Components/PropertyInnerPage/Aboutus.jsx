import React from "react";
import img from "../PropertyInnerPage/Assets/img.webp";
import img6 from "../PropertyInnerPage/Assets/IMG6.jpg";
import img2 from "../PropertyInnerPage/Assets/IMG2.jpg";

import location1 from "../PropertyInnerPage/Assets/location1.png";
import bed from "../PropertyInnerPage/Assets/bed.png";
import sqft from "../PropertyInnerPage/Assets/sqft.png";
import apartment from "../PropertyInnerPage/Assets/apartment.png";

import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto p-4 md:p-6 ">
      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20">
        <img
          src={img}
          alt="Property"
          className="w-full md:w-[60%] h-[300px] md:h-[550px] rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[40%]">
          <img
            src={img2}
            alt="Property"
            className="w-full h-[150px] md:h-[260px] rounded-lg shadow-md object-cover"
          />
          <img
            src={img6}
            alt="Property"
            className="w-full h-[150px] md:h-[260px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      {/* Image Section End */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section - Details */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600">
            Bouganville
          </h1>
          <div className="flex flex-wrap justify-between items-center mt-2">
            <p className="text-gray-600 flex items-center gap-2">
              <img src={location1} alt="Location" className="w-5 h-5" />{" "}
              Koyambedu, Chennai
            </p>
            <p className="text-lg md:text-xl font-semibold text-red-500">
              ₹2CR - 2.5CR
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-gray-700 text-sm border-b pb-4">
            <p className="flex items-center gap-2">
              <img src={sqft} alt="Sqft" className="w-5 h-5" /> Sqft: 3567
            </p>
            <p className="flex items-center gap-2">
              <img src={apartment} alt="Type" className="w-5 h-5" /> Type:
              Residential Apartment
            </p>
          </div>
          <button
            onClick={() => navigate("/clientbooking")}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 w-full md:w-auto"
          >
            Book Now
          </button>
          <h2 className="mt-6 text-lg md:text-xl font-semibold">
            About the property
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
            Nestled in a prime location, Bouganville is the epitome of luxurious
            living. Designed for those who seek tranquility without compromising
            on modern conveniences, this property offers a harmonious blend of
            sophistication, comfort, and timeless elegance.
          </p>
        </div>

        {/* Right Section - Appointment Form */}
        <div className="p-6 rounded-lg shadow-md bg-gray-100 w-full">
          <h3 className="text-lg text-center font-semibold mb-4">
            Schedule an Appointment
          </h3>
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 border-b mt-2 rounded bg-transparent focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your phone"
            className="w-full p-2 border-b mt-2 rounded bg-transparent focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border-b mt-2 rounded bg-transparent focus:outline-none"
          />
          <textarea
            placeholder="Your message"
            className="w-full p-2 border-b mt-2 rounded bg-transparent focus:outline-none"
          ></textarea>
          <button className="mt-4 bg-red-500 text-white px-6 py-2 w-full rounded-full shadow-md hover:bg-red-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
