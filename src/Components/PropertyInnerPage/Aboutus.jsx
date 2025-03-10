import React from "react";

const PropertyListing = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section - Main Image and Thumbnails */}
      <div className="md:col-span-2">
        <img
          src="/mnt/data/image.png"
          alt="Bouganville"
          className="w-full h-auto rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src="/mnt/data/image.png"
            alt="Bouganville"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/mnt/data/image.png"
            alt="Bouganville"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Right Section - Property Details & Contact Form */}
      <div className="md:col-span-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Bouganville</h1>
          <p className="text-gray-600 flex items-center mt-2">
            📍 Koyambedu, Chennai
          </p>
          <p className="text-red-500 text-xl font-semibold mt-2">
            ₹2CR - 2.5CR
          </p>
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <span>📏 Sqft: 3567</span>
            <span>🏡 Units: 2BHK</span>
            <span>🏢 Type: Residential Apartment</span>
          </div>
          <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Book Now
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold">Schedule an Appointment</h2>
          <form className="mt-4 grid gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Your phone"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border rounded-lg w-full"
            />
            <textarea
              placeholder="Your message"
              className="p-2 border rounded-lg w-full"
            ></textarea>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
