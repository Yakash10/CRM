import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaBuilding, // Using FaBuilding for all phases
} from "react-icons/fa";

// Hero images (top slider)
import hero1 from "../ClientBookingPage/Assets/hero1.png";
import hero2 from "../ClientBookingPage/Assets/hero2.png";
import hero3 from "../ClientBookingPage/Assets/hero3.png";
import hero4 from "../ClientBookingPage/Assets/hero4.png";

// Logos (hero overlay)
import casagrandLogo from "../ClientBookingPage/Assets/casagrandLogo.png";
import offerLogo from "../ClientBookingPage/Assets/offerLogo.png";

// Single apartment image
import apartment2 from "../ClientBookingPage/Assets/apartment2.jpg";

// Floor plan images
import floorplan1 from "../ClientBookingPage/Assets/floorplan1.jpg";
import floorplan2 from "../ClientBookingPage/Assets/floorplan2.jpg";

// Local image for the booking form's left side
import houseInHands from "../ClientBookingPage/Assets/houseInHands.avif";

function MainContent() {
  // Existing States
  const [activeSpace, setActiveSpace] = useState(null);
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // States for 6 Phases, 100 Floors
  const [selectedPhase, setSelectedPhase] = useState("Phase 1");
  const [selectedFloor, setSelectedFloor] = useState(null);
  const phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6"];
  const floorsArray = Array.from({ length: 100 }, (_, i) => i + 1);

  // For floors other than 1 => 6 spaces: S1–S6
  const defaultSpacesArray = ["S1", "S2", "S3", "S4", "S5", "S6"];

  // For Floor 1 => 3 rows, each with 6 items
  // Row 1: S1-S6, Row 2: T1-T6, Row 3: U1-U6
  const floorOneRows = [
    ["S1", "S2", "S3", "S4", "S5", "S6"],
    ["T1", "T2", "T3", "T4", "T5", "T6"],
    ["U1", "U2", "U3", "U4", "U5", "U6"],
  ];

  // Use the same icon for all phases
  const phaseIcon = <FaBuilding className="inline-block mr-1" />;
  const phaseIcons = {
    "Phase 1": phaseIcon,
    "Phase 2": phaseIcon,
    "Phase 3": phaseIcon,
    "Phase 4": phaseIcon,
    "Phase 5": phaseIcon,
    "Phase 6": phaseIcon,
  };

  // Scroll to booking form when visible
  useEffect(() => {
    if (showBookingForm) {
      const formSection = document.getElementById("bookingFormSection");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showBookingForm]);

  // Scroll to floor plan when visible
  useEffect(() => {
    if (showFloorPlan) {
      const floorPlanSection = document.getElementById("floorPlanSection");
      if (floorPlanSection) {
        floorPlanSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showFloorPlan]);

  // Handler for space click
  const handleSpaceClick = (phase, floor, space) => {
    setActiveSpace(`${phase} - Floor ${floor} - Space ${space}`);
    setShowFloorPlan(true);
  };

  // Handler for "Book Now" button
  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  // Create a ref for the slider
  const sliderRef = useRef(null);

  // Hero Slider Settings with autoplay disabled and no dots
  const heroSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Custom scrollbar styling with two arrow buttons (transparent background, custom arrow colors) */}
      <style jsx>{`
        /* Works in WebKit browsers (Chrome, Safari, new Edge) */

        /* Hide all scrollbar buttons by default */
        .custom-scroll::-webkit-scrollbar-button {
          display: none;
        }

        /* Scrollbar track and thumb */
        .custom-scroll::-webkit-scrollbar {
          height: 8px; /* Horizontal scrollbar height */
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f5f9; /* Tailwind gray-100 */
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #f97316; /* Tailwind orange-500 */
          border-radius: 9999px;
          border: 1px solid #f1f5f9;
        }

        /* Show only the left arrow at the start and the right arrow at the end with transparent background */
        .custom-scroll::-webkit-scrollbar-button:horizontal:decrement:start {
          display: block;
          width: 24px;
          height: 24px;
          background: none;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 10px 10px;
          background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%23333%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11.354%201.646a.5.5%200%200%201%200%20.708L5.707%208l5.647%205.646a.5.5%200%200%201-.708.708l-6-6a.5.5%200%200%201%200-.708l6-6a.5.5%200%200%201%20.708%200z%22/%3E%3C/svg%3E");
        }
        .custom-scroll::-webkit-scrollbar-button:horizontal:increment:end {
          display: block;
          width: 24px;
          height: 24px;
          background: none;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 10px 10px;
          background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%23333%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.646%201.646a.5.5%200%200%200%200%20.708L10.293%208%204.646%2013.646a.5.5%200%200%200%20.708.708l6-6a.5.5%200%200%200%200-.708l-6-6a.5.5%200%200%200-.708%200z%22/%3E%3C/svg%3E");
        }
      `}</style>

      {/* HERO / TOP SLIDER */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh]">
        <div
          className="h-full overflow-hidden"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <Slider ref={sliderRef} {...heroSettings} className="h-full">
            <div>
              <img
                src={hero1}
                alt="Hero 1"
                className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover"
              />
            </div>
            <div>
              <img
                src={hero2}
                alt="Hero 2"
                className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover"
              />
            </div>
            <div>
              <img
                src={hero3}
                alt="Hero 3"
                className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover"
              />
            </div>
            <div>
              <img
                src={hero4}
                alt="Hero 4"
                className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover"
              />
            </div>
          </Slider>
        </div>

        {/* CASAGRAND LOGO */}
        <div className="absolute top-6 left-4 sm:top-8 sm:left-6 md:top-[110px] md:left-[190px]">
          <img
            src={casagrandLogo}
            alt="Casagrand Logo"
            className="w-32 sm:w-40 md:w-40"
          />
        </div>

        {/* OFFER LOGO */}
        <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-[150px]">
          <img
            src={offerLogo}
            alt="Pay 10% Now, 90% on handover"
            className="w-32 sm:w-40 md:w-40"
          />
        </div>

        {/* TEXT OVERLAY */}
        <div className="absolute left-4 top-1/4 sm:left-6 sm:top-1/3 md:left-[190px] md:top-1/3 text-white">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
            Casagrand Avenuepark highlight
          </h1>
          <button className="bg-orange-500 px-4 sm:px-6 py-1 sm:py-2 text-white rounded-md hover:bg-orange-600 transition">
            Explore properties
          </button>
        </div>
      </section>

      {/* ROW 1: Building Image | Details | Phases/Floors/Spaces */}
      <section className="px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-8 md:space-y-0">
          {/* Left: Building Image */}
          <div className="flex-none w-full md:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
            <img
              src={apartment2}
              alt="Bouganville"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Middle: Apartment Details */}
          <div className="flex-none w-full md:w-[270px] mt-4 md:mt-12 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Bouganville</h2>
            <div className="flex items-center text-gray-600 text-sm space-x-1">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>Koyambedu, Chennai</span>
            </div>
            <p className="text-orange-600 text-xl font-semibold">₹2CR - 2.5CR</p>
            <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-2">
              <div className="flex items-center space-x-1">
                <FaRulerCombined className="text-gray-400" />
                <span>3567 sqft</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaBed className="text-gray-400" />
                <span>2BHK</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaBath className="text-gray-400" />
                <span>2 Bath</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Type: Residential Apartment</p>
          </div>

          {/* Right: "Select Available Spaces" Section */}
          <div className="w-full max-w-3xl">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg shadow-lg space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
                Select Available Spaces in this Apartment
              </h2>

              {/* Phase Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {phases.map((phase) => {
                  const isActive = phase === selectedPhase;
                  return (
                    <button
                      key={phase}
                      onClick={() => {
                        setSelectedPhase(phase);
                        setSelectedFloor(null); // reset floor selection
                        setActiveSpace(null);
                      }}
                      className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm border transition-colors duration-200 ${
                        isActive
                          ? "bg-orange-500 text-white border-orange-600"
                          : "bg-white text-orange-700 border-orange-300 hover:bg-orange-100"
                      }`}
                    >
                      {phaseIcons[phase]} {phase}
                    </button>
                  );
                })}
              </div>

              {/* Floor Pills (scrollable) */}
              <div className="mt-4">
                <p className="text-center text-gray-700 mb-2 font-medium">
                  Select a Floor
                </p>
                {/* custom-scroll class for custom scrollbar & arrow buttons (only at start/end) */}
                <div className="w-full overflow-x-auto flex gap-2 py-2 px-1 custom-scroll">
                  {floorsArray.map((floor) => {
                    const isFloorActive = floor === selectedFloor;
                    return (
                      <button
                        key={floor}
                        onClick={() => {
                          setSelectedFloor(floor);
                          setActiveSpace(null);
                        }}
                        className={`min-w-[60px] py-1 text-sm font-medium rounded-full border flex-shrink-0 text-center transition-colors duration-200 ${
                          isFloorActive
                            ? "bg-orange-500 text-white border-orange-600"
                            : "bg-white text-orange-700 border-orange-300 hover:bg-orange-100"
                        }`}
                      >
                        {floor}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spaces Buttons */}
              {selectedFloor && (
                <div className="mt-4">
                  <p className="text-center text-gray-700 mb-2 font-medium">
                    Select a Space on Floor {selectedFloor}
                  </p>
                  {selectedFloor === 1 ? (
                    <div className="flex flex-col space-y-3">
                      {floorOneRows.map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="flex justify-center gap-3 flex-wrap"
                        >
                          {row.map((label) => {
                            const isActive =
                              activeSpace ===
                              `${selectedPhase} - Floor 1 - Space ${label}`;
                            return (
                              <button
                                key={label}
                                onClick={() =>
                                  handleSpaceClick(selectedPhase, 1, label)
                                }
                                className={`w-12 h-12 flex items-center justify-center text-sm font-semibold rounded-full shadow-sm border transition-transform duration-200 hover:scale-105 ${
                                  isActive
                                    ? "bg-orange-500 text-white border-orange-600"
                                    : "bg-white text-orange-700 border-orange-300 hover:bg-orange-100"
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3 justify-center">
                      {defaultSpacesArray.map((spaceLabel) => {
                        const isActive =
                          activeSpace ===
                          `${selectedPhase} - Floor ${selectedFloor} - Space ${spaceLabel}`;
                        return (
                          <button
                            key={spaceLabel}
                            onClick={() =>
                              handleSpaceClick(
                                selectedPhase,
                                selectedFloor,
                                spaceLabel
                              )
                            }
                            className={`w-12 h-12 flex items-center justify-center text-sm font-semibold rounded-full shadow-sm border transition-transform duration-200 hover:scale-105 ${
                              isActive
                                ? "bg-orange-500 text-white border-orange-600"
                                : "bg-white text-orange-700 border-orange-300 hover:bg-orange-100"
                            }`}
                          >
                            {spaceLabel}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2: Floor Plan Section */}
      {showFloorPlan && (
        <section id="floorPlanSection" className="px-4 pb-8">
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-none w-full md:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src={floorplan1}
                alt="Floor Plan"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex-none w-full md:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src={floorplan2}
                alt="Floor Plan"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex-none w-full md:w-[270px] h-[300px] flex flex-col justify-center space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Bouganville
              </h2>
              <p className="text-sm text-gray-600">Private Beach Access</p>
              <p className="text-orange-600 text-lg font-semibold">
                ₹2CR - 2.5CR
              </p>
              <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-2">
                <div className="flex items-center space-x-1">
                  <FaRulerCombined className="text-gray-400" />
                  <span>3567 sqft</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaBed className="text-gray-400" />
                  <span>2BHK</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaBath className="text-gray-400" />
                  <span>2 Bath</span>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className="mt-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition w-fit"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* BOOKING FORM SECTION */}
      {showBookingForm && (
        <section
          id="bookingFormSection"
          className="w-full flex justify-center items-center"
        >
          <style jsx>{`
            @keyframes slideInLeft {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes slideInRight {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .animate-slideInLeft {
              animation: slideInLeft 0.8s ease-out forwards;
            }
            .animate-slideInRight {
              animation: slideInRight 0.8s ease-out forwards;
            }
          `}</style>
          <div className="flex flex-col md:flex-row w-full max-w-5xl h-[700px] rounded-lg overflow-hidden shadow-lg">
            <div className="w-full md:w-1/2 h-full animate-slideInLeft">
              <img
                src={houseInHands}
                alt="House in Hands"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white animate-slideInRight">
              <div className="w-full p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                  Booking Details
                </h2>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First name*"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Last name*"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="United States ( US )*"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Street Address*"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Town / City*"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone*"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <textarea
                    rows="3"
                    placeholder="Add Something"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-semibold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default MainContent;
