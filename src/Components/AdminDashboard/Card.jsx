import React from "react";

const cards = [
  {
    id: 1,
    image: "🏢",
    title: "Total properties",
    value: 100,
    percentage: "+30%",
    trend: "up",
    description: "Higher than last month",
  },
  {
    id: 2,
    image: "🛒",
    title: "Properties for sale",
    value: 70,
    percentage: "-15%",
    trend: "down",
    description: "Lesser than last month",
  },
  {
    id: 3,
    image: "🏠",
    title: "Properties for rent",
    value: 30,
    percentage: "+30%",
    trend: "up",
    description: "Higher than last month",
  },
  {
    id: 4,
    image: "👥",
    title: "New leads",
    value: 300,
    percentage: "+30%",
    trend: "up",
    description: "Higher than last month",
  },
];

const Card = () => {
  return (
    <div className="flex gap-4 justify-between p-3">
      {cards.map(
        ({ id, image, title, value, percentage, trend, description }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-lg p-3 flex flex-col w-[350px] items-start border border-gray-200"
          >
            {/* Image */}
            <div className="text-3xl">{image}</div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-2">{title}</h2>

            {/* Value */}
            <h3 className="text-2xl font-bold mt-1">{value}</h3>

            {/* Percentage Change */}
            <p
              className={`text-sm font-medium mt-1 flex items-center ${
                trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {percentage}{" "}
              <span className="text-gray-600 ml-1">{description}</span>
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
