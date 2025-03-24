import { useState } from "react";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IMG1 from "../BuilderInnerPage/Assets/IMG1.webp";
import IMG2 from "../BuilderInnerPage/Assets/IMG2.jpg";
import IMG3 from "../BuilderInnerPage/Assets/IMG3.jpg";

const properties = [
  {
    id: 1,
    name: "Casagrand Suncity",
    price: "₹59 L to ₹1.45 Cr",
    location: "Melakottaiyur",
    bedrooms: "2, 3 & 4 BHK Apts",
    type: "Apartments",
    image: IMG1,
  },
  {
    id: 2,
    name: "Casagrand Mercury",
    price: "₹95L to ₹3.3Cr",
    location: "Perambur",
    bedrooms: "2, 3 & 4 BHK - 5 BHK Floor Villa",
    type: "Villas",
    image: IMG2,
  },
  {
    id: 3,
    name: "Casagrand Madelyn",
    price: "₹51 L to ₹78 L",
    location: "Pallavaram",
    bedrooms: "2 & 3 BHK Apartments",
    type: "Apartments",
    image: IMG3,
  },
  {
    id: 4,
    name: "Casagrand Madelyn",
    price: "₹51 L to ₹78 L",
    location: "Pallavaram",
    bedrooms: "2 & 3 BHK Apartments",
    type: "Apartments",
    image: IMG3,
  },
];

export default function PropertyCards() {
  const [selectedType, setSelectedType] = useState("Apartments");
  const navigate = useNavigate();

  const filteredProperties = properties.filter(
    (property) => property.type === selectedType
  );

  return (
    <div className="p-4 md:p-6">
      {/* Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-lg font-semibold text-center md:text-left">
          Explore the properties that suit your lifestyle
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {["Apartments", "Villas", "Plots", "Land"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                selectedType === type
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-500 text-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 md:p-5">
              <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
                New Launch
              </span>
              <h2 className="text-lg font-semibold mt-2">{property.name}</h2>
              <p className="text-orange-600 font-bold text-sm">
                {property.price}
              </p>
              <p className="text-gray-600 flex items-center text-sm mt-2">
                <FaMapMarkerAlt className="mr-2" /> {property.location}
              </p>
              <p className="text-gray-600 flex items-center text-sm mt-2">
                <FaBed className="mr-2" /> {property.bedrooms}
              </p>
              <div className="flex justify-center md:justify-start mt-4">
                <button
                  onClick={() => navigate("/property")}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm md:text-base"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}