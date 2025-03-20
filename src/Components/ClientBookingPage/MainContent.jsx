import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

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

// Floors/spaces data
const floorsData = [
  {
    floor: "Floor 1",
    spaces: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  },
  {
    floor: "Floor 2",
    spaces: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  },
  {
    floor: "Floor 3",
    spaces: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  },
];

function MainContent() {
  // Hero slider settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  // Track which space is selected
  const [activeSpace, setActiveSpace] = useState(null);

  // Whether to show the floor plan row
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  // Control the booking form visibility
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Scroll to the booking form section when it becomes visible
  useEffect(() => {
    if (showBookingForm) {
      const formSection = document.getElementById("bookingFormSection");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showBookingForm]);

  // Scroll to the floor plan section when it becomes visible
  useEffect(() => {
    if (showFloorPlan) {
      const floorPlanSection = document.getElementById("floorPlanSection");
      if (floorPlanSection) {
        floorPlanSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showFloorPlan]);

  // On space click => set active + show floor plan
  const handleSpaceClick = (floor, space) => {
    setActiveSpace(`${floor}-${space}`);
    setShowFloorPlan(true);
  };

  // Show the booking form when "Book Now" is clicked
  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO / TOP SLIDER */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh]">
        <div className="h-full overflow-hidden">
          <Slider {...heroSettings} className="h-full">
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

      {/* ROW 1: a flex with 3 children => image | details | spaces */}
      <section className="px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-16 space-y-8 md:space-y-0">
          {/* Child 1: Building image */}
          <div className="flex-none w-full md:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
            <img
              src={apartment2}
              alt="Bouganville"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Child 2: Apartment details */}
          <div className="flex-none w-full md:w-[270px] mt-4 md:mt-12 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Bouganville</h2>
            <div className="flex items-center text-gray-600 text-sm space-x-1">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>Koyambedu, Chennai</span>
            </div>
            <p className="text-orange-600 text-xl font-semibold">
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
            <p className="text-sm text-gray-600">Type: Residential Apartment</p>
          </div>

          {/* Child 3: Select Available Spaces */}
          <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 space-y-6">
            {/* Page Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
              Select Available Spaces in this Apartment
            </h2>

            {/* Floors */}
            <div className="space-y-4">
              {floorsData.map((floorItem, floorIndex) => (
                <div
                  key={floorIndex}
                  className="flex items-center flex-wrap gap-3"
                >
                  {/* Icon + Floor Label */}
                  <div className="flex items-center gap-2">
                    <FaBuilding className="text-pink-600" size={20} />
                    <span className="text-lg font-semibold text-gray-800">
                      {floorItem.floor}
                    </span>
                  </div>

                  {/* Spaces */}
                  {floorItem.spaces.map((space, i) => {
                    const isActive =
                      activeSpace === `${floorItem.floor}-${space}`;
                    return (
                      <button
                        key={i}
                        onClick={() => handleSpaceClick(floorItem.floor, space)}
                        className={`w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center
                          text-xs sm:text-sm font-medium rounded transition-transform duration-200 hover:scale-105
                          ${
                            isActive
                              ? "bg-black text-white"
                              : "bg-orange-300 text-black hover:bg-orange-400"
                          }`}
                      >
                        {space}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2: Floor plan section (scrolls into view on selection) */}
      {showFloorPlan && (
        <section id="floorPlanSection" className="px-4 pb-8">
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Floor plan images */}
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

            {/* Floor plan details: centered vertically */}
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

      {/* BOOKING FORM SECTION: Image & form */}
      {showBookingForm && (
        <section
          id="bookingFormSection"
          className="w-full flex justify-center items-center"
        >
          {/* Inline styles for custom animations */}
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

          {/* Unified Container */}
          <div className="flex flex-col md:flex-row w-full max-w-5xl h-[700px] rounded-lg overflow-hidden shadow-lg">
            {/* LEFT: Image with slide-in animation */}
            <div className="w-full md:w-1/2 h-full animate-slideInLeft">
              <img
                src={houseInHands}
                alt="House in Hands"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: Form with slide-in animation */}
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
