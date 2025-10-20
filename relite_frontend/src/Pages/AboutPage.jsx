import React from 'react';
import Slider from '../components/Slider';

// At the top of your component file, import all images
import amulLogo from '../assets/amul-logo-png-image-with-girl-and-text-750x422.webp';
import bayerLogo from '../assets/Bayer_MaterialScience_Logo.svg';
import fortisLogo from '../assets/Fortis Healthcare.png';
import ioclLogo from '../assets/Indian_Oil_Corporation-Logo.wine.svg';
import kindpngLogo from '../assets/kindpng_7614150.png';
import mahindraLogo from '../assets/Mahindra-New-Logo-Vector.svg-.png';
import marriottLogo from '../assets/Marriott-Logo-scaled.png';
import hsbcLogo from '../assets/hsbc.png'
import gmrLogo from '../assets/gmr-logo.svg'
import directorImage from '../assets/director.webp'
import schneiderLogo from '../assets/schneider.png'
import dahuaLogo from '../assets/vectorseek.com-Dahua-Technology-Logo-Vector.png'
import honeyLogo from '../assets/honey.svg'
import boschLogo from '../assets/Bosch-Logo.png'



import { motion } from "framer-motion";


  



const AboutPage = () => {
  const products = [
    "CCTV surveillance, monitoring & recording system",
    "Biometric Attendance/Access control system",
    "Networking and Wireless (Wi-Fi) setup",
    "Public address & voice evacuation system",
    "Intelligent fire detection & alarm system",
    "Building management system",
    "Video Door Phone",
    "Home automation system",
  ];

  


  const associations = [
  {  name:"scheider",logo: schneiderLogo },
  {  name:"dahua",logo: dahuaLogo },
  {  name:"honey",logo: honeyLogo },
  {  name:"bosch",logo: boschLogo },
];

  const clients = [
  { name: "TechCorp Global", logo: amulLogo },
  { name: "InnovateX Industries", logo: bayerLogo },
  { name: "FutureTech Solutions", logo: fortisLogo },
  { name: "GlobalTrade Partners", logo: ioclLogo },
  { name: "Elite Manufacturing", logo: kindpngLogo },
  { name: "Precision Systems Inc", logo: mahindraLogo },
  { name: "Precision Systems Inc", logo: hsbcLogo },
  { name: "Precision Systems Inc", logo: marriottLogo },
  { name: "Precision Systems Inc", logo: gmrLogo },
];

// Rest of your JSX remains the same


  return (
    <div className="bg-gradient-to-b from-[#fffaf4] to-[#fffdf8] text-[#3e2c1c]">
      <Slider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Us Section */}
        <section className="mb-28 animate-fadeIn">
          <h2 className="text-5xl font-serif font-bold mb-8">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
  <span className="text-[#5c4633] font-semibold">Relite Technologies</span>, established in <span className="text-[#5c4633] font-semibold">2009</span> in <span className="text-[#5c4633] font-semibold">Ghaziabad, Uttar Pradesh</span>, is a trusted leader in <span className="text-[#5c4633] font-semibold">Electronic Security, Fire Safety, Networking, and Home Automation</span>. We pride ourselves on delivering projects <span className="text-[#5c4633] font-semibold">on time</span> and <span className="text-[#5c4633] font-semibold">within budget</span> while exceeding <span className="text-[#5c4633] font-semibold">quality standards</span>. From simple, user-friendly security solutions to some of the most advanced systems in India, our work spans <span className="text-[#5c4633] font-semibold">commercial enterprises, government departments, local councils, and residential clients</span>. Every project is backed by <span className="text-[#5c4633] font-semibold">tailored service and maintenance agreements</span> designed to meet the unique needs of each client.
</p>

<p className="text-lg leading-relaxed mb-4">
  Our extensive range of products includes <span className="text-[#5c4633] font-semibold">Boom Barriers, Automatic Sliding Gates, Swing Leaf Gates, Automatic Doors, Toll Fee Collection Systems, Spike Barriers, Road Blockers, Turnstiles, CCTV Camera Systems, Access Control Systems</span>, and <span className="text-[#5c4633] font-semibold">fully customized automation and security solutions</span>. Built with <span className="text-[#5c4633] font-semibold">high-quality materials</span> and <span className="text-[#5c4633] font-semibold">cutting-edge technology</span>, our systems are renowned for <span className="text-[#5c4633] font-semibold">durability, low maintenance, corrosion resistance, and easy installation</span>. Supported by a team of <span className="text-[#5c4633] font-semibold">highly trained technicians</span>, we provide <span className="text-[#5c4633] font-semibold">24/7 service</span> and expertise across <span className="text-[#5c4633] font-semibold">CCTV, Access Control, Alarms, Fire Safety, Boom Barriers, and Home Automation products</span>, ensuring <span className="text-[#5c4633] font-semibold">safety, efficiency, and peace of mind</span> for all our clients.
</p>
        </section>

        {/* Vision Section */}
        <section className="mb-28 bg-[#f9f3eb] rounded-2xl p-12 border border-[#eaddc8] shadow-[0_8px_30px_rgba(191,162,122,0.05)] transform hover:scale-[1.01] transition-transform duration-500">
          <h2 className="text-5xl font-serif font-bold mb-8">Our Vision</h2>
          <p className="text-[#5c4633] text-lg leading-relaxed mb-4">
            We are a quality-oriented organization, with quality standardization as our primary objective. Our world-class team of quality controllers rigorously tests our complete range of products across various parameters to ensure they meet international quality standards and are completely flawless. With rich industry experience and knowledge, we have established a strong market presence by consistently delivering a wide range of high-quality products.

          </p>
          <p className="text-[#5c4633] text-lg leading-relaxed">
            
            We are committed to manufacturing both standard and customized products that precisely meet our clients requirements. Our transparent dealings, ethical business practices, competitive pricing, wide distribution network, and quality-centric approach help us not only gain new clients but also retain existing ones, ensuring sustained growth and trust in the industry.
          </p>
        </section>

        {/* Clients Section */}
          <section className="mb-28">
            <h2 className="text-5xl font-serif font-bold mb-12 text-center">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-[#fff9f0] p-6 rounded-xl shadow-md hover:shadow-lg border border-[#eaddc8] transition-all duration-300 flex flex-col items-center justify-center text-center font-semibold text-[#5c4633] transform hover:-translate-y-1"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto mb-4 object-contain"
                  />
                  
                </div>
              ))}
            </div>
          </section>


        {/* Founder Section */}
        <section className="mb-28 bg-[#f9f3eb] rounded-2xl p-12 border border-[#eaddc8] shadow-[0_8px_30px_rgba(191,162,122,0.05)]">
          <h2 className="text-5xl font-serif font-bold mb-8">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-60 h-60 bg-gradient-to-br from-[#bfa27a] to-[#d6b982] rounded-full flex items-center justify-center text-6xl flex-shrink-0 transform hover:rotate-6 transition-transform duration-500
            shadow-[0_0_20px_rgba(191,162,122,0.6)] hover:shadow-[0_0_30px_rgba(191,162,122,0.8)]">
                  <img
                    src={directorImage}
                    alt="Director"
                    className="h-58 w-58 object-cover rounded-full"
                  />
              </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Amit Kumar, Director & Founder</h3>
          <p className="text-[#5c4633] leading-relaxed mb-4">
            Founded in 2009, Relite Technologies has been delivering specialized installation services and comprehensive turnkey project solutions in the field of security and automation. The company is led by <strong>Mr. Amit</strong>,<strong> a KIET Ghaziabad alumnus with a B.Tech in Electrical Science (1998-2002)</strong>, and a well-known expert in gate automation. With extensive experience, he has successfully installed and supplied a wide range of products across the Indian subcontinent, including swing and sliding gate operators, tubular motors for blinds, curtains, and awnings, boom barriers, traffic bollards, turnstiles, flap barriers, electrically operated axle breakers, tyre killers, and motors for shutters. Under his leadership, Relite Technologies continues to set benchmarks in innovation, quality, and reliability.
          </p>

             
            </div>
          </div>
        </section>

        {/* Core Product Portfolio Section */}
         <section className="mb-28">
      <h2 className="text-5xl font-serif font-bold mb-12 text-center text-[#3e2c1c]">
        Core Product Portfolio
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(180, 140, 90, 0.25)",
            }}
            className="relative overflow-hidden rounded-2xl border border-[#e8d8c0] text-[#3e2c1c] p-6 cursor-pointer"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdf7ef] via-[#f7ecda] to-[#f2e1c5] animate-gradientMove"></div>

            {/* Gold shimmer overlay on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,150,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-serif font-bold mb-4">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>


        {/* Authorized Association Section */}
       <section className="mb-28 bg-[#fff9f0] rounded-2xl px-6 py-10 sm:px-10 sm:py-12 border border-[#eaddc8] shadow-[0_8px_30px_rgba(191,162,122,0.05)]">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 text-center md:text-left text-[#3e2c1c]">
    Authorized Associations
  </h2>

  <p className="text-[#5c4633] text-base sm:text-lg mb-8 text-center md:text-left leading-relaxed">
    We maintain strategic partnerships and certifications with leading industry organizations:
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
    {associations.map((association, index) => (
      <div
        key={index}
        className="bg-[#f9f3eb] p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center justify-center border-l-4 border-[#bfa27a] transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      >
        <img
          src={association.logo}
          alt={association.name}
          className="h-14 sm:h-20 w-auto object-contain mb-3"
        />
        
      </div>
    ))}
  </div>
</section>

        {/* Technical Strengths Section */}
        <section>
          <h2 className="text-5xl font-serif font-bold mb-8">Technical Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fff9f0] p-8 rounded-xl shadow-md border-t-4 border-[#bfa27a] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-4">Experienced Leadership</h3>
              <p className="text-[#5c4633] leading-relaxed">A team of seasoned business managers with strong industry backgrounds ensures mature, well-integrated, and strategic management across all operations.</p>
            </div>
            <div className="bg-[#fff9f0] p-8 rounded-xl shadow-md border-t-4 border-[#bfa27a] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-4">Technical Excellence</h3>
              <p className="text-[#5c4633] leading-relaxed">Highly skilled customer support engineers with extensive technical expertise, chosen through rigorous evaluation, deliver reliable engineering solutions and exceptional service.</p>
            </div>
            <div className="bg-[#fff9f0] p-8 rounded-xl shadow-md border-t-4 border-[#bfa27a] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-4">Dedicated Workforce</h3>
              <p className="text-[#5c4633] leading-relaxed">Our in-house team of trained professionals handles cabling, conducting, installation, and service projects efficiently, ensuring consistent quality and timely delivery.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Animation for Fade-In */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;