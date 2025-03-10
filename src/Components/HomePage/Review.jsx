import React, { useState } from "react";
import Review1 from "./Assets/Review1.png";
import Review2 from "./Assets/Review2.png";
import Review3 from "./Assets/Review3.png";
import reviewprofile1 from "./Assets/reviewprofile1.png";
import reviewprofile2 from "./Assets/reviewprofile2.png";

const reviews = [
  {
    id: 1,
    text: "Best! I Got The House I Wanted Through Hounter",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    author: "Dianne Russell",
    role: "Manager Director",
    rating: 4.6,
    imageUrl: reviewprofile1,
    houseImageUrl: Review1,
  },
  {
    id: 2,
    text: "Amazing experience!",
    description:
      "Found my dream home in no time. The platform is user-friendly and the support was excellent.",
    author: "John Doe",
    role: "Software Engineer",
    rating: 4.8,
    imageUrl: reviewprofile2,
    houseImageUrl: Review2,
  },
  {
    id: 3,
    text: "Highly recommended!",
    description:
      "The process was smooth and transparent. I appreciate the detailed information provided for each property.",
    author: "Jane Smith",
    role: "Marketing Manager",
    rating: 4.5,
    imageUrl: reviewprofile1,
    houseImageUrl: Review3,
  },
];

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {reviews.map((review, index) => (
          <div key={review.id} className="flex-shrink-0 w-[380px] p-6">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-[500px]">
              {" "}
              {/* Added fixed height */}
              <div className="relative w-full">
                <img
                  src={review.houseImageUrl}
                  alt="House"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
              </div>
              <p className="text-lg font-semibold mb-2 text-center">
                {review.text}
              </p>
              <p className="text-gray-600 mb-4 text-center flex-grow">
                {review.description}
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={review.imageUrl}
                  alt={review.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-center">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.242.503 1.756l-2.62 1.908a1 1 0 00-.397 1.11l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-3.087-1.785a1 1 0 00-.83 0l-3.087 1.785c-.755.433-1.54-.118-1.118l1.07-3.292a1 1 0 00-.397-1.11l-2.62-1.908c-.868-.514-.466-1.756.503-1.756h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">{review.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What Our Users Say About Us
        </h2>
        <div className="text-center mb-6">
          <a href="#" className="text-blue-500 hover:underline">
            See Our Review
          </a>
        </div>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
