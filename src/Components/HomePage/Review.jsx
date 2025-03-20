import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import review1 from "../HomePage/Assets/review1.png";
import review2 from "../HomePage/Assets/review2.png";
import review3 from "../HomePage/Assets/review3.png";
import reviewprofile1 from "../HomePage/Assets/reviewprofile1.png";
import reviewprofile2 from "../HomePage/Assets/reviewprofile2.png";

export default function review() {
  const testimonials = [
    {
      id: 1,
      name: "Dianne Russell",
      role: "Manager Director",
      rating: 4.6,
      review:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process.",
      image: review1,
      avatar: reviewprofile1,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Real Estate Agent",
      rating: 4.8,
      review:
        "This platform made finding my dream home so much easier! I love how detailed the listings are and how simple the process is.",
      image: review2,
      avatar: reviewprofile2,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Property Consultant",
      rating: 4.7,
      review:
        "A fantastic experience! The site offers comprehensive details and the best user experience for property search.",
      image: review3,
      avatar: reviewprofile1,
    },
    {
      id: 4,
      name: "Emily Smith",
      role: "Investor",
      rating: 4.9,
      review:
        "Highly recommended for property buyers. The seamless experience and great selection make it stand out.",
      image: review1,
      avatar: reviewprofile2,
    },
  ];

  return (
    <div className="w-full mx-auto px-4">
      <h1 className="text-red-500 text-center">See Our Reviews</h1>
      <p className=" text-center text-2xl font-semibold mb-6">
        What Our Users Say About Us
      </p>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Default to 3 slides on larger screens
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Laptops and desktops
          768: { slidesPerView: 2 }, // Tablets
          480: { slidesPerView: 1 }, // Mobile
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="relative">
            {/* Background Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={testimonial.image}
                alt="Modern House"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Testimonial Card */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 bg-white shadow-lg rounded-xl p-6">
              <h2 className="font-bold text-lg text-gray-900">
                Best! I Got The House I Wanted Through Hounter
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{testimonial.review}</p>

              {/* User Info */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-gray-900 font-semibold">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p></p>
    </div>
  );
}
