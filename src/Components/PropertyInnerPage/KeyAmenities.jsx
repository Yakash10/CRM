import React from "react";
import air from "../PropertyInnerPage/Assets/air.png";
import fire from "../PropertyInnerPage/Assets/fire.png";
import sports from "../PropertyInnerPage/Assets/sports.png";
import smoke from "../PropertyInnerPage/Assets/smoke.png";
import kids from "../PropertyInnerPage/Assets/kids.png";
import pet from "../PropertyInnerPage/Assets/pet.png";
import elevator from "../PropertyInnerPage/Assets/elevator.png";
import laundry from "../PropertyInnerPage/Assets/laundry.png";

const amenities = [
  { image: air, label: "Air conditioner" },
  { image: fire, label: "Fire extinguisher" },
  { image: sports, label: "Sports field" },
  { image: smoke, label: "Smoking area" },
  { image: kids, label: "Kids zone" },
  { image: pet, label: "Pet friendly" },
  { image: elevator, label: "Elevator" },
  { image: laundry, label: "Laundry" },
];

const KeyAmenities = () => {
  return (
    <div className="p-6 w-full mx-auto">
      {/* Key Amenities */}
      <h2 className="text-xl font-semibold">Key Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img src={item.image} alt={item.label} className="w-10 h-10" />
            <span className="text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Payment Calculator */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Payment Calculator</h2>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold mt-2">₹30,0000/month</p>
          <p className="text-orange-500">Reset</p>
        </div>

        <div className="relative w-full h-3 rounded-lg bg-gray-200 mt-2">
          <div
            className="absolute top-0 left-0 h-full bg-orange-500 rounded-l-lg"
            style={{ width: "60%" }}
          ></div>
          <div
            className="absolute top-0 left-[60%] h-full bg-yellow-500"
            style={{ width: "20%" }}
          ></div>
          <div
            className="absolute top-0 left-[80%] h-full bg-black rounded-r-lg"
            style={{ width: "10%" }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <div className="flex flex-col items-start">
            <p>
              {" "}
              <span className="text-orange-500">⬤</span> Principal & interest
            </p>
            <p className="ml-4 mt-1">₹20,000</p>
          </div>
          <div className="flex flex-col items-start">
            <p>
              <span className="text-yellow-500">⬤</span> Property taxes
            </p>
            <p className="ml-4 mt-1">₹20,000</p>
          </div>
          <div className="flex flex-col items-start">
            <p>
              {" "}
              <span className="text-black">⬤</span> Homeowners insurance
            </p>
            <p className="ml-4 mt-1">₹20,000</p>
          </div>
        </div>
      </div>

      {/* Loan Details */}
      <div className="mt-6 border border-gray-200 p-4 rounded-lg grid grid-cols-3 gap-4 w-full">
        <div className="border-r">
          <p className="text-gray-600 text-sm">Down payment</p>
          <p className="font-semibold">20% (₹3,00,000) ✏</p>
        </div>
        <div className="border-r">
          <p className="text-gray-600 text-sm">Home price</p>
          <p className="font-semibold">₹2CR ✏</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Loan details</p>
          <p className="font-semibold">30-yr Nego. 6.67% ✏</p>
        </div>
      </div>
    </div>
  );
};

export default KeyAmenities;
