import React from "react";
import floorPlanMain from "./Assets/floorPlanMain.png";
import floorPlan1 from "./Assets/floorPlan1.png";
import floorPlan2 from "./Assets/floorPlan2.png";
import floorPlan3 from "./Assets/floorPlan3.png";
import Arrow from "../HomePage/Assets/Arrow.png";


const FloorPlan = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Floor Plan</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Floor Plan Image */}
        <div className="lg:col-span-2">
          <img
            src={floorPlanMain}
            alt="Main Floor Plan"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Dropdowns replaced with static text and arrow */}
        <div className="space-y-2">
          <label className="block text-gray-500 text-sm text-center">Apartment</label>
          <div className="border border-orange-400 p-3 rounded-lg shadow-lg flex justify-between items-center">
            <span>2 BHK</span>
            <img src={Arrow} alt="" className="w-[25px] h-[25px]" />
          </div>

          <label className="block text-gray-500 text-sm text-center">Built-Up Area</label>
          <div className="border border-orange-400 p-3 rounded-lg shadow-lg flex justify-between items-center">
            <span>5623 Sq. Ft.</span>
            <img src={Arrow} alt="" className="w-[25px] h-[25px]" />
          </div>

          <div>
            <img
              src={floorPlan1}
              alt="Alternate Floor Plan"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Additional Floor Plan Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <img
          src={floorPlan1}
          alt="Floor Plan 1"
          className="rounded-lg shadow-lg w-full"
        />
        <img
          src={floorPlan2}
          alt="Floor Plan 2"
          className="rounded-lg shadow-lg w-full"
        />
        <img
          src={floorPlan3}
          alt="Floor Plan 3"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default FloorPlan;
