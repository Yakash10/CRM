import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import property1 from "../BuilderInnerPage/Assets/property1.png";
import property2 from "../BuilderInnerPage/Assets/property2.png";
import property3 from "../BuilderInnerPage/Assets/property3.png";
import property4 from "../BuilderInnerPage/Assets/property4.png";
import property5 from "../BuilderInnerPage/Assets/property5.png";
import property6 from "../BuilderInnerPage/Assets/property6.png";

const properties = [
  { id: 1, type: "Apartments", image: property1 },
  { id: 2, type: "Apartments", image: property2 },
  { id: 3, type: "Apartments", image: property3 },
  { id: 4, type: "Villas", image: property4 },
  { id: 5, type: "Villas", image: property5 },
  { id: 6, type: "Plots", image: property6 },
  { id: 7, type: "Apartments", image: property1 },
  { id: 8, type: "Apartments", image: property2 },
  { id: 9, type: "Apartments", image: property3 },
  { id: 10, type: "Apartments", image: property2 },
  { id: 11, type: "Apartments", image: property3 },
];

export default function PropertyList() {
  const [selectedType, setSelectedType] = useState("Apartments");
  const navigate = useNavigate();

  const handlePropertyClick = (property) => {
    if (property.id === 1) {
      navigate("/property");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Explore Properties That Suit Your Lifestyle
      </h2>
      {/* Filter Buttons with Animation */}
      <div className="flex gap-4 mb-6">
        {["Apartments", "Villas", "Plots", "Land"].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 border rounded-full transition ${
              selectedType === type
                ? "bg-orange-400 text-white"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </motion.button>
        ))}
      </div>
      {/* Property Grid with Animation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence>
          {properties
            .filter((property) => property.type === selectedType)
            .map((property) => (
              <motion.img
                key={property.id}
                src={property.image}
                alt={property.type}
                className={`w-full h-64 lg:w-[350px] object-cover rounded-lg ${
                  property.id === 1 ? "cursor-pointer" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => handlePropertyClick(property)}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
