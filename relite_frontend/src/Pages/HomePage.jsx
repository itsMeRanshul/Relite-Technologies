import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo_trans.png'


const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/about"); // Navigate to About Us page
  };

 

  const keyAreas = [
    { icon: "⚡", title: "Innovation", desc: "Elegant technology crafted for performance" },
    { icon: "🏆", title: "Quality", desc: "Unmatched reliability & precision" },
    { icon: "👥", title: "Support", desc: "Always beside you" },
    { icon: "🎯", title: "Results", desc: "We help you achieve excellence" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fffaf4] to-[#fffdf8] text-[#3e2c1c]">
      <Slider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro Section */}
        <div
          className={`grid md:grid-cols-2 gap-16 items-center mb-28 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
   <div className="relative group">
  <div className="relative bg-gradient-to-br from-[#f9f3eb] via-[#fef8f1] to-[#f5ede3] rounded-3xl h-[28rem] flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
    
    {/* Animated glow effect behind the logo */}
    <div className="absolute w-72 h-72 bg-gradient-to-r from-[#bfa27a]/30 via-[#d4b896]/40 to-[#bfa27a]/30 rounded-full filter blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
    <div className="absolute w-56 h-56 bg-[#bfa27a]/50 rounded-full filter blur-2xl animate-[ping_4s_ease-in-out_infinite]"></div>
    
    {/* Logo container with border and animations */}
    <div className="relative">
      {/* Rotating border glow */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#bfa27a] via-[#d4b896] to-[#bfa27a] rounded-full opacity-75 blur-lg animate-[spin_8s_linear_infinite]"></div>

      {/* NEW: Dark gradient background behind logo for white text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1b1a] via-[#2a2018] to-[#3b2f22] rounded-full scale-105 shadow-[0_0_50px_rgba(0,0,0,0.4)]"></div>
      
      {/* Logo image with border */}
      <div className="relative bg-[#1e1b17]/90 backdrop-blur-sm rounded-full p-6 border-4 border-[#bfa27a]/40 shadow-[0_0_60px_rgba(191,162,122,0.45)]">
        <img
          src={logo} // replace with your logo path
          alt="Logo"
          className="relative w-45 h-45 object-contain transform group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-700 animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
    </div>

    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#bfa27a]/5 via-transparent to-[#bfa27a]/10"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(191,162,122,0.05)_100%)]"></div>
    
    {/* Sparkle effects */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#bfa27a] rounded-full opacity-60 animate-[ping_2s_ease-in-out_infinite]"></div>
    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#d4b896] rounded-full opacity-60 animate-[ping_3s_ease-in-out_infinite_0.5s]"></div>
  </div>
</div>

<style jsx>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>


          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#bfa27a] font-semibold text-sm tracking-wider uppercase bg-[#f6efe5] px-4 py-2 rounded-full">
                Welcome
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Building a Smarter, Safer, and More Connected Future with{" "}
              <span className="bg-gradient-to-r from-[#bfa27a] to-[#d6b982] bg-clip-text text-transparent">
                Relite Technologies
              </span>
            </h2>
            <p className="text-[#5c4633] text-lg leading-relaxed">
              Our organization is recognized as a leading Manufacturer, Trader, and Supplier of a premium range of Boom Barriers, Automatic Sliding and Swing Gates, Automatic Doors, Toll Collection Systems, Spike Barriers, Building Management Systems, Electronic Security, Fire Safety, Networking, and Home Automation solutions.
            </p>
            <button 
            onClick={handleDiscoverClick}
            className="group mt-4 bg-gradient-to-r from-[#bfa27a] to-[#d6b982] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Discover More
              <span className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Key Areas */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[#bfa27a] font-semibold text-sm tracking-wider uppercase bg-[#f6efe5] px-4 py-2 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-5xl font-bold mt-6 text-[#3e2c1c]">
              What We Excel At
            </h2>
            <p className="text-[#5c4633] text-lg mt-4 max-w-2xl mx-auto">
              Thoughtfully designed solutions for timeless performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyAreas.map((area, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl border border-[#eaddc8] shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="relative p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#f9f3eb] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500 border border-[#eaddc8]">
                    <span className="text-3xl">{area.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-[#3e2c1c] group-hover:text-[#bfa27a] transition-all duration-300">
                    {area.title}
                  </h3>

                  <p className="text-[#5c4633] text-base">{area.desc}</p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* R&D Section */}
        <div className="relative group overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] bg-[#f9f3eb] border border-[#eaddc8]">
          <div className="relative p-12 md:p-16">
            <div className="max-w-4xl">
              <span className="text-[#bfa27a] font-semibold text-sm tracking-wider uppercase bg-[#fff9f0] px-4 py-2 rounded-full">
                Innovation Hub
              </span>

              <h2 className="text-5xl font-bold mb-8 mt-6 text-[#3e2c1c]">
                Research & Development
              </h2>

              <div className="space-y-6 text-[#5c4633] text-lg leading-relaxed">
                <p>
                  Our R&D division crafts tomorrow’s technologies today — blending innovation with elegance and purpose.
                </p>
                <p>
                  Every idea we create is designed for sustainability, efficiency, and human-centered experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  ["15+", "Years Experience"],
                  ["70+", "Clients Served"],
                ].map(([value, label], i) => (
                  <div
                    key={i}
                    className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#eaddc8] hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-[#bfa27a] font-bold text-2xl">
                      {value}
                    </span>
                    <p className="text-[#5c4633] text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
