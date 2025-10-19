import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3e2c1c] to-[#5c4633] border-y border-[#c4a676]/40 shadow-[0_12px_50px_rgba(42,30,18,0.2)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-12">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="font-serif text-3xl font-bold bg-gradient-to-r from-[#a68b5e] to-[#c4a676] bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-transform duration-400">
              Relites Technologies
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-serif font-semibold text-[#fff9f0] uppercase tracking-wide transform hover:scale-105 transition-all duration-400 hover:text-[#c4a676]">
                Resources
              </h2>
              <ul className="text-[#fff9f0] font-serif font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-serif font-semibold text-[#fff9f0] uppercase tracking-wide transform hover:scale-105 transition-all duration-400 hover:text-[#c4a676]">
                Follow us
              </h2>
              <ul className="text-[#fff9f0] font-serif font-medium">
                <li className="mb-4">
                  <a
                    href="https://instagram.com"
                    className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <Link to="https://facebook.com" className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-serif font-semibold text-[#fff9f0] uppercase tracking-wide transform hover:scale-105 transition-all duration-400 hover:text-[#c4a676]">
                Legal
              </h2>
              <ul className="text-[#fff9f0] font-serif font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#c4a676] hover:underline transition-all duration-400 transform hover:scale-105 inline-block">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#c4a676]/40 sm:mx-auto lg:my-10" />

        {/* Copyright and Social Icons */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#fff9f0] font-serif sm:text-center">
            © 2025
            <a href="https://relitetechnologies.com/" className="hover:text-[#c4a676] hover:underline transition-all duration-400">
              Relites Technologies
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link to="https://facebook.com" className="text-[#fff9f0] hover:text-[#c4a676] transition-all duration-400 transform hover:scale-110">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://instagram.com" className="text-[#fff9f0] hover:text-[#c4a676] transition-all duration-400 transform hover:scale-110">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm1.635 5.417a1.462 1.462 0 1 1-2.932 0 1.462 1.462 0 0 1 2.932 0ZM10 15.254c-2.587 0-4.683-2.095-4.683-4.683 0-2.587 2.096-4.683 4.683-4.683 2.588 0 4.683 2.096 4.683 4.683 0 2.588-2.095 4.683-4.683 4.683Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram account</span>
            </Link>
            <Link to="tel:+9999708138" className="text-[#fff9f0] hover:text-[#c4a676] transition-all duration-400 transform hover:scale-110">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.782 12.419a1.67 1.67 0 0 0-1.1-.986l-2.315-.579a1.67 1.67 0 0 0-1.875.765l-.676 1.128a11.048 11.048 0 0 1-5.75-5.75l1.127-.676a1.671 1.671 0 0 0 .765-1.875L8.567 4.318a1.67 1.67 0 0 0-.986-1.1l-2.53-.625a1.672 1.672 0 0 0-1.88.721A13.578 13.578 0 0 0 2.82 6.676a13.584 13.584 0 0 0 8.94 8.94 13.578 13.578 0 0 0 3.363-.848 1.672 1.672 0 0 0 .721-1.88l-.625-2.53ZM7.258 3.742l2.53.625c.512.127.973.512 1.1.986l.579 2.316a1.673 1.673 0 0 1-.765 1.875l-1.127.676a11.048 11.048 0 0 0 5.75 5.75l.676-1.127a1.671 1.671 0 0 1 1.875-.765l2.315.579a1.67 1.67 0 0 1 .986 1.1l.625 2.53c.127.512-.052 1.075-.448 1.472a13.578 13.578 0 0 1-3.363.848 13.584 13.584 0 0 1-8.94-8.94 13.578 13.578 0 0 1 .848-3.363c.397-.396.96-.575 1.472-.448Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">WhatsApp contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animation for Hover Effects */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}