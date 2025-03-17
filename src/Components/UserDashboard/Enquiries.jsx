import React from "react";
import dyanbruce from "../UserDashboard/Assests/dyanbruce.png";

const enquiries = [
  {
    id: 1,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
  {
    id: 2,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
  {
    id: 3,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
  {
    id: 4,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
  {
    id: 5,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
  {
    id: 6,
    name: "Dyan Bruce",
    message: "I saw your rental property can we....",
    avatar: dyanbruce,
  },
];

const Enquiries = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-96 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Enquiries</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          View all
        </a>
      </div>

      {/* Enquiry List */}
      <div className="space-y-4">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="flex items-center space-x-3 border-b pb-3 last:border-b-0"
          >
            <img
              src={enquiry.avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{enquiry.name}</p>
              <p className="text-xs text-gray-500 truncate w-60">
                {enquiry.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;
