import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // Get product from location state
  const product = location.state?.product;

  // If no product in state (direct URL access), redirect to products page
  if (!product) {
    navigate('/products');
    return null;
  }

  const whatsappNumber = "919999708138"; // Replace with your actual WhatsApp number
  const message = `Hi, I'm interested in ${product.name}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const SendIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );

  // Split description into main text and features list
  let descriptionText = product.description;
  let featuresList = [];

  if (product.description.includes("Features:")) {
    const [beforeFeatures, afterFeatures] = product.description.split("Features:");
    descriptionText = beforeFeatures.trim();
    featuresList = afterFeatures
      .split(',')
      .map(f => f.trim())
      .filter(f => f.length > 0);
  }

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); // trigger animations on mount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf4] via-[#fff9f0] to-[#fffdf8] overflow-hidden">
      {/* Back Button */}
      <div className="bg-gradient-to-r from-[#c8a87b] to-[#e0c997] py-5 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-start">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#fff5e1] to-[#f5e3c2] text-[#5a4025] font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <span className="text-lg">←</span>
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Product Detail Container */}
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ease-out ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="bg-gradient-to-br from-[#fff9f0] to-[#fffdf8] rounded-3xl shadow-2xl overflow-hidden border border-[#eaddc8] relative group">
          
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6d5b6]/40 to-[#f1e5c6]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

          {/* Product Image */}
          <div className="relative w-full max-w-2xl mx-auto h-[50vh] sm:h-[55vh] rounded-3xl flex items-center justify-center overflow-hidden shadow-lg bg-gradient-to-br from-[#f8e7c1] via-[#f3d9a2] to-[#e8c88a]">
  {/* Soft glowing background overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#fff8e6]/60 via-[#f7e5b9]/40 to-[#f0d89a]/50 blur-3xl opacity-80 animate-pulse-slow"></div>

  {/* Product Image */}
  <img
    src={product.image}
    alt={product.name}
    className={`relative z-10 w-full h-full object-contain p-6 transform transition-all duration-1000 ${
      fadeIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    } hover:scale-105`}
    loading="lazy"
  />
</div>


          {/* Product Content */}
          <div className="relative p-8 md:p-12">
           <h1 className="text-4xl font-serif font-bold mb-8 tracking-wide bg-gradient-to-r from-[#7b5a2d] to-[#b48b4e] bg-clip-text text-transparent drop-shadow-sm">
  {product.name}
</h1>


            {/* Enquiry Button */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mb-10"
            >
              <SendIcon />
              <span>Send Enquiry on WhatsApp</span>
            </a>

            {/* Description Section */}
            <div className="bg-gradient-to-br from-[#fffef9] to-[#fff9f0] rounded-2xl p-8 border-l-4 border-[#bfa27a] shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-serif font-bold text-[#3e2c1c] mb-4">Product Description</h2>

              {descriptionText && (
                <p className="text-[#5c4633] text-lg leading-relaxed mb-5">
                  {descriptionText}
                </p>
              )}

              {featuresList.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold text-[#3e2c1c] mb-3">Features:</h3>
                  <ul className="list-disc list-inside text-[#5c4633] text-lg space-y-2">
                    {featuresList.map((feature, idx) => (
                      <li
                        key={idx}
                        className="hover:text-[#3e2c1c] transition-colors duration-200"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Additional Features */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: '✓', title: 'Quality Assured', text: 'Certified and tested' },
                { icon: '🚚', title: 'Fast Delivery', text: 'Quick shipping available' },
                { icon: '💬', title: '24/7 Support', text: 'Expert assistance anytime' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#fffef9] to-[#fff9f0] p-6 rounded-2xl border border-[#eaddc8] shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-[#3e2c1c] mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-[#5c4633]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
