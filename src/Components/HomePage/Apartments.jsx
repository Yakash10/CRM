


// import React, { useState } from "react";
// import Apartment1 from "../HomePage/Assets/Apartment1.png";
// import Apartment2 from "../HomePage/Assets/Apartment2.png";
// import Apartment3 from "../HomePage/Assets/Apartment3.png";

// const allProjects = [
//   {
//     title: "Casagrand",
//     image: Apartment1,
//     type: "Apartments",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
//   {
//     title: "Radiance",
//     image: Apartment2,
//     type: "Villas",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
//   {
//     title: "Realtor",
//     image: Apartment3,
//     type: "Plots",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
//   {
//     title: "Casagrand",
//     image: Apartment1,
//     type: "Land",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
//   {
//     title: "Radiance",
//     image: Apartment2,
//     type: "Apartments",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
//   {
//     title: "Realtor",
//     image: Apartment3,
//     type: "Villas",
//     beds: "3 Beds",
//     bath: "2 Bath",
//     kitchen: "1 Kitchen",
//   },
// ];

// const Apartments = () => {
//   const [selectedType, setSelectedType] = useState("All");

//   const filteredProjects =
//     selectedType === "All"
//       ? allProjects
//       : allProjects.filter((project) => project.type === selectedType);

//   return (
//     <div className="container mx-auto p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">
//           Explore Properties That Suit Your Lifestyle
//         </h2>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
//           View all
//         </button>
//       </div>

//       {/* Filters Section */}
//       <div className="flex space-x-4 mb-6">
//         {["All", "Apartments", "Villas", "Plots", "Land"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedType(type)}
//             className={`px-4 py-2 rounded-full transition-all ${
//               selectedType === type
//                 ? "bg-orange-200 text-orange-600 font-medium"
//                 : "border border-gray-300"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Property Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredProjects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <div className="flex space-x-2 text-gray-600 mt-2 text-sm">
//                 <span>{project.beds}</span>
//                 <span>• {project.bath}</span>
//                 <span>• {project.kitchen}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Apartments;


import React, { useState } from "react";
import Apartment1 from "../HomePage/Assets/Apartment1.png";
import Apartment2 from "../HomePage/Assets/Apartment2.png";
import Apartment3 from "../HomePage/Assets/Apartment3.png";

const allProjects = [
  {
    title: "Casagrand",
    image: Apartment1,
    type: "Apartments",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
  {
    title: "Radiance",
    image: Apartment2,
    type: "Villas",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
  {
    title: "Realtor",
    image: Apartment3,
    type: "Plots",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
  {
    title: "Casagrand",
    image: Apartment1,
    type: "Land",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
  {
    title: "Radiance",
    image: Apartment2,
    type: "Apartments",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
  {
    title: "Realtor",
    image: Apartment3,
    type: "Villas",
    beds: "3 Beds",
    bath: "2 Bath",
    kitchen: "1 Kitchen",
  },
];

const Apartments = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === selectedType);

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Explore Properties That Suit Your Lifestyle
        </h2>
        <button
          onClick={() => setSelectedType("All")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          View all
        </button>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-4 mb-6">
        {["All", "Apartments", "Villas", "Plots", "Land"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedType === type
                ? "bg-orange-200 text-orange-600 font-medium"
                : "border border-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex space-x-2 text-gray-600 mt-2 text-sm">
                <span>{project.beds}</span>
                <span>• {project.bath}</span>
                <span>• {project.kitchen}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments;


