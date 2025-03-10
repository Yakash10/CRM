import React from "react";
import featured1 from "../HomePage/Assets/featured1.png";
import top2 from "../HomePage/Assets/top2.png";
import top3 from "../HomePage/Assets/top3.png"

const MoreProperties = () => {
  const projects = [
    {
      title: "Luxury Villa in Palm Jumeirah",
      price: "₹20,00,000",
      image: featured1, // Directly from public folder
      features: ["Private Beach Access"],
      sqft: "3567",
      beds: "6",
      bath: "6",
    },
    {
      title: "Bouganville",
      price: "₹1.49cr - ₹1.54cr",
      image: top2,
      features: ["Modern Interiors"],
      sqft: "4000",
      beds: "5",
      bath: "5",
    },
    {
      title: "Skyline Penthouse",
      price: "₹25,00,000",
      image: top3,
      features: ["City View"],
      sqft: "5000",
      beds: "4",
      bath: "5",
    },
    {
      title: "Beachfront Bungalow",
      price: "₹30,00,000",
      image: top2,
      features: ["Oceanfront"],
      sqft: "4500",
      beds: "6",
      bath: "7",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Heading and Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">More properties</h2>
      </div>

      {/* Project Cards Section */}
      <div className="flex overflow-x-auto space-x-4 justify-between scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white  rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.price}</p>

              {/* Feature */}
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7a2 2 0 012.828 0l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7m2 2l4.343-4.343"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  {project.features[0]}
                </span>
              </div>

              {/* Property Details */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Sqft: {project.sqft}</span>
                <span>Beds: {project.beds}</span>
                <span>Bath: {project.bath}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProperties;
