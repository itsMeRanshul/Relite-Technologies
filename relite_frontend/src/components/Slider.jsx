import React, { useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const ChevronLeft = () => (
    <svg className="w-6 h-6 text-[#3e2c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRight = () => (
    <svg className="w-6 h-6 text-[#3e2c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <div className="relative h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`h-full bg-gradient-to-r ${slide.bg} flex items-center justify-center text-[#fff9f0] shadow-[0_8px_30px_rgba(191,162,122,0.1)]`}
          >
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium animate-fadeIn">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#fff9f0]/20 hover:bg-[#fff9f0]/30 p-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(191,162,122,0.1)]"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#fff9f0]/20 hover:bg-[#fff9f0]/30 p-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(191,162,122,0.1)]"
      >
        <ChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#fff9f0] w-8' : 'bg-[#eaddc8]/50'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Slider;