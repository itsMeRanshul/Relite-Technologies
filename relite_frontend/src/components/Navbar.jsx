import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_trans.png";

const Navbar = ({ setSelectedProduct }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const MenuIcon = () => (
    <svg className="w-7 h-7 text-[#fff9f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-7 h-7 text-[#fff9f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-b from-[#3e2c1c] to-[#5c4633] sticky top-0 z-50 shadow-[0_8px_35px_rgba(42,30,18,0.25)] border-b border-[#c4a676]/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setSelectedProduct(null)}
            className="flex items-center space-x-2 group"
          >
            <div className="relative flex items-center justify-center">
              {/* Glowing background circle */}
              <div className="absolute h-16 w-16 md:h-18 md:w-18 rounded-full bg-gradient-to-b from-[#fef9f0] to-[#c4a676]/40 blur-md opacity-110"></div>

              {/* Logo */}
              <img
                src={logo}
                alt="Smart Innovation Logo"
                className="relative h-16 w-16 object-contain rounded-full border-2 border-[#c4a676] 
                           shadow-[0_0_18px_rgba(196,166,118,0.4)] group-hover:scale-110 transition-transform duration-500 ease-in-out animate-pulseGlow"
              />

              {/* Subtle ring */}
              <span className="absolute inset-0 rounded-full border border-[#c4a676]/60 animate-spinSlow"></span>
            </div>

            {/* Company name */}
            <span className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#fef4da] to-[#c4a676] 
                             bg-clip-text text-transparent tracking-tight ml-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]">
              Relite Technologies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {links.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setSelectedProduct(null)}
                className={`capitalize text-[#fff9f0] font-serif text-lg font-semibold transition-all duration-500 relative group
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
                  after:bg-gradient-to-r from-[#2a1e12] to-[#c4a676] after:transition-all after:duration-500
                  hover:after:w-full hover:text-[#c4a676]
                  ${
                    currentPath === path
                      ? "text-[#c4a676] after:w-full font-bold"
                      : ""
                  }`}
              >
                <span className="group-hover:scale-105 transition-transform duration-400 inline-block">
                  {name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-[#5c4633]/50 hover:bg-[#fff9f0]/20 transition-all duration-400"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#3e2c1c] to-[#5c4633] border-t border-[#c4a676]/40 px-4 py-5 space-y-2 shadow-[0_12px_50px_rgba(42,30,18,0.2)] animate-slideDown">
          {links.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => {
                setSelectedProduct(null);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left capitalize py-2.5 px-4 text-[#fff9f0] font-serif text-lg font-semibold transition-all duration-400 rounded-xl
                hover:bg-[#fff9f0]/20 hover:text-[#c4a676]
                ${
                  currentPath === path
                    ? "text-[#c4a676] font-bold bg-[#fff9f0]/10"
                    : ""
                }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(196,166,118,0.3); }
          50% { box-shadow: 0 0 25px rgba(196,166,118,0.8); }
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spinSlow {
          animation: spinSlow 10s linear infinite;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
