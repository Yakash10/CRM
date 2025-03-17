import React from "react";
import bookings1 from "../UserDashboard/Assests/bookings1.png";
import bookings2 from "../UserDashboard/Assests/bookings2.png";
import bookings3 from "../UserDashboard/Assests/bookings3.png";
import bookings4 from "../UserDashboard/Assests/bookings4.png";


const properties = [
  {
    id: 1,
    image: bookings1,
    title: "The Corner",
    address: "24, Broad Street, TN",
    sqft: 3567,
    units: "2BHK",
  },
  {
    id: 2,
    image: bookings2,
    title: "The Corner",
    address: "24, Broad Street, TN",
    sqft: 3567,
    units: "2BHK",
  },
  {
    id: 3,
    image: bookings3,
    title: "The Corner",
    address: "24, Broad Street, TN",
    sqft: 3567,
    units: "2BHK",
  },
  {
    id: 4,
    image: bookings4,
    title: "The Corner",
    address: "24, Broad Street, TN",
    sqft: 3567,
    units: "2BHK",
  },
];

const Bookings = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bookings</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View all
        </a>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-blue-600 font-semibold hover:underline cursor-pointer">
                {property.title}
              </h3>
              <p className="text-gray-600 text-sm flex items-center">
                📍 {property.address}
              </p>
              <div className="mt-2 flex items-center text-gray-500 text-sm">
                <span className="mr-4">📐 Sqft: {property.sqft}</span>
                <span>🛏️ Units: {property.units}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
