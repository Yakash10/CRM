import React from "react";
import img1 from "../PropertyInnerPage/Assets/img1.png";
import img2 from "../PropertyInnerPage/Assets/img2.png";
import location1 from "../PropertyInnerPage/Assets/location1.png";
import bed from "../PropertyInnerPage/Assets/bed.png";
import sqft from "../PropertyInnerPage/Assets/sqft.png";
import apartment from "../PropertyInnerPage/Assets/apartment.png";

import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto p-6">
      {/* Image Section */}
      <div className="flex gap-20">
        <img
          src={img1}
          alt="Property"
          className="w-[700px] h-[550px] rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-6">
          <img
            src={img2}
            alt="Property"
            className="w-[475px] h-[260px] rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="Property"
            className="w-[475px] h-[260px] rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* Image Section End */}

      <div className="grid grid-cols-3 gap-12 mt-8 items-start">
        {/* Left Section - Details */}
        <div className="col-span-2">
          <h1 className="text-3xl font-bold text-red-600">Bouganville</h1>
          <div className="flex justify-between">
            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <img src={location1} alt="" /> Koyambedu, Chennai
            </p>
            <p className="text-xl font-semibold text-red-500 mt-2">
              ₹2CR - 2.5CR
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-4 text-gray-700 text-sm border-b pb-4">
            <p className="flex gap-2">
              <img src={sqft} alt="" /> Sqft: 3567
            </p>
            {/* <p className="flex gap-2">
              <img src={bed} alt="" /> Units: 2BHK
            </p> */}
            <p className="flex gap-2">
              <img src={apartment} alt="" /> Type: Residential Apartment
            </p>
          </div>
          <button
            onClick={() => navigate("/clientbooking")}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600"
          >
            Book Now
          </button>
          <h2 className="mt-6 text-xl font-semibold">About the property</h2>
          <p className="text-gray-600 mt-2 text-base leading-relaxed">
            Nestled in a prime location, Bouganville is the epitome of luxurious
            living. Designed for those who seek tranquility without compromising
            on modern conveniences, this property offers a harmonious blend of
            sophistication, comfort, and timeless elegance. Whether you're
            looking for a serene escape from the city's hustle or a vibrant
            community to call home, Bouganville is your ideal destination.
          </p>
        </div>

        {/* Right Section - Appointment Form */}
        <div className="p-6  rounded-lg shadow-md bg-gray-100 w-full">
          <h3 className="text-lg text-center font-semibold mb-4">
            Schedule a Appointment
          </h3>
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 border-b mt-2 rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Your phone"
            className="w-full p-2 border-b mt-2 rounded bg-transparent"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border-b mt-2 rounded bg-transparent "
          />
          <textarea
            placeholder="Your message"
            className="w-full p-2 border-b mt-2 rounded bg-transparent"
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
