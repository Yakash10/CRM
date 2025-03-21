import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../BuilderInnerPage/Assets/IMG1.webp";
import img2 from "../BuilderInnerPage/Assets/IMG2.jpg";
import img3 from "../BuilderInnerPage/Assets/IMG3.jpg";
import img4 from "../BuilderInnerPage/Assets/IMG4.jpg";
import img5 from "../BuilderInnerPage/Assets/IMG5.webp";
import img6 from "../BuilderInnerPage/Assets/IMG6.jpg";

const properties = [
  { id: 1, type: "Apartments", image: img1 },
  { id: 2, type: "Apartments", image: img2 },
  { id: 3, type: "Apartments", image: img3 },
  { id: 4, type: "Villas", image: img4 },
  { id: 5, type: "Villas", image: img5 },
  { id: 6, type: "Plots", image: img6 },
  { id: 7, type: "Apartments", image: img1 },
  { id: 8, type: "Apartments", image: img2 },
  { id: 9, type: "Apartments", image: img3 },
  { id: 10, type: "Apartments", image: img2 },
  { id: 11, type: "Apartments", image: img3 },
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
