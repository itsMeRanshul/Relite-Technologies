import React, { useState, useEffect } from "react";
import s1Image from "../assets/Slider/s1.png"
import s2Image from "../assets/Slider/s2.png"
import s3Image from "../assets/Slider/s3.png"

const SliderComponent = () => {
  const slides = [
    { id: 1, title: "Slide 1", image: s1Image },
    { id: 2, title: "Slide 2", image: s2Image },
    { id: 3, title: "Slide 3", image: s3Image },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-4 overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.77, 0, 0.175, 1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex-shrink-0 transition-opacity duration-[800ms]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-lg"
            />
            
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-[#888888] text-white p-2 rounded-full shadow-lg hover:bg-[#555555] focus:outline-none focus:ring-2 focus:ring-[#888888] transition-transform duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-[#888888] text-white p-2 rounded-full shadow-lg hover:bg-[#555555] focus:outline-none focus:ring-2 focus:ring-[#888888] transition-transform duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 transform hover:scale-125 ${
              index === currentIndex ? "bg-[#333333]" : "bg-[#BBBBBB]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;