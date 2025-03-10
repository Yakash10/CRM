import React from "react";
import floorPlan from "./Assets/Floor Plan.png"; 

const FloorPlan = () => {
  return (
    <div>
      <img className="mx-auto" src={floorPlan} alt="Floor plan" />
    </div>
  );
};

export default FloorPlan;
