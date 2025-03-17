import React from "react";
import status1 from "../PropertyManagementDashboard/Assets/status1.png";
import status2 from "../PropertyManagementDashboard/Assets/status2.png";
import status3 from "../PropertyManagementDashboard/Assets/status3.png";
import status4 from "../PropertyManagementDashboard/Assets/status4.png";
import status5 from "../PropertyManagementDashboard/Assets/status5.png";
import status6 from "../PropertyManagementDashboard/Assets/status6.png";


const properties = [
  {
    id: 1,
    image: status1,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Rental Income: ₹25,000/mo",
  },
  {
    id: 2,
    image: status2,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Awaiting permit: Approval",
  },
  {
    id: 3,
    image: status3,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Quote price: 15,00,000",
  },
  {
    id: 4,
    image: status4,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Rental Income: ₹25,000/mo",
  },
  {
    id: 5,
    image: status5,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Rental Income: ₹25,000/mo",
  },
  {
    id: 6,
    image: status6,
    name: "Sunset Apartments",
    address: "24, Broad Street, TN",
    info: "Last Rental: ₹25,000/mo",
  },
];

const PropertyStatus = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Property Status</h2>
        <a href="#" className="text-blue-500 text-sm">
          View all
        </a>
      </div>

      {/* Scrollable List */}
      <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex items-center mb-4 border-b pb-2"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-16 h-16 rounded-md object-cover mr-4"
            />
            <div>
              <h3 className="font-semibold">{property.name}</h3>
              <p className="text-gray-500 text-sm">{property.address}</p>
              <p className="text-gray-700 text-sm">{property.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyStatus;
