import React from 'react';
import { useNavigate } from 'react-router-dom';
import abbimage from "../products/abb.png"
import crushedimage from "../products/crushed.png"
import trafficimage from "../products/Traffic.jpg"
import fhimage from "../products/fh.png"
import FlapBarrierimage from "../products/FlapBarrier.jpg"
import WaistTurnstilesimage from "../products/WaistTurnstiles.jpg"
import ConcealedTrafficBollardimage from "../products/ConcealedTrafficBollard.jpg"
import TrafficBollardsimage from "../products/TrafficBollards.jpg"
import SurveillanceSystemimage from "../products/SurveillanceSystem.jpg"
import CCTVCameraSystemimage from "../products/CCTVCameraSystem.jpg"
import SlidingGateOperatorimage from "../products/SlidingGateOperator.jpg"
import SwingGateOperatorimage from "../products/SwingGateOperator.jpg"
import ElectromechanicalRoadBlockerimage from "../products/ElectromechanicalRoadBlocker.jpg"
import HydraulicRoadBlockerimage from "../products/HydraulicRoadBlocker.jpg"
import ShutterAutomationimage from "../products/ShutterAutomation.jpg"
import TubularMotorsRollerShutterimage from "../products/TubularMotorsRollerShutter.jpg"




const ProductsPage = () => {
  const navigate = useNavigate();

  const products = {
    "Road Barrier": [
      { id: 1, name: "Automatic Boom Barrier", image:abbimage, description: "Backed by a team of highly qualified professionals, we are noted as the recognized manufacturer, trader and supplier of Automatic Boom Barrier. This boom barrier is used to block the way of the vehicle by controlling points. Our offered barrier finds wide application in check posts and toll plaza. In addition to this, our customers can purchase this boom barrier at highly reasonable prices.Features:Channel loop detector,Automatic operated,Adjustable speed" },
      { id: 2, name: "Traffic Boom Barrier", image: trafficimage, description: "We have emerged as the foremost name engaged in offering high quality Automatic Boom Barrier. Fabricated using premium quality raw material and advanced technology in adherence with international standards, our offered product range is highly demanded in the market. Known for its varied salient features, this range is highly admired by the clients. Moreover, we provide this boom barrier in various specifications and dimensions to our esteemed clients.Features:Perfect finish,Good strength,Corrosion resistance" },
      { id: 3, name: "Crash Rated Boom Barrier", image: crushedimage, description: "We are the most established manufacturer, trader and supplier as we provide our customers with the excellent quality of Crash Rated Boom Barrier. It offers efficient security at the entry and exit points of factories, complexes, parking plots, etc. It also has an electronic control panel, which receives the signal of card reader, computer, etc. The boom barrier offered by us is available in varied customized options as per the needs of clients.Features:Optimum time,Dual speed,Greater flexibility" }
    ],
    "Pedestrian Access Control": [
      { id: 4, name: "Waist Height Turnstiles", image:WaistTurnstilesimage, description: "We are offering a wide array of Turnstiles Waist Height, as we are the manufacturer, trader and supplier of the same. Our offered products provide safe and reliable bi-directional access control. These are designed for trouble free operation and are available in electrically controlled models. All models are fully assembled for quick and easy installation. Each turnstile is available in stainless steel or powder coat finish at very reasonable prices.Features:Automatic operation,Sturdiness,Reliable" },
      { id: 5, name: "Flap Barrier", image: FlapBarrierimage, description: "urnstiles Flap Barrier are fully specified and tested by technicians in terms of designing and quality standards. Apart from this, the offered range is commonly used in both directions, the barrier may operate with card access or token acceptor for authorized passage. Constructed using the best grade factor inputs, the offered flap barrier is designed as per the set universal norms.Features:No limit switches,Minimum noise with cushioning rubber buffer and dynamic braking,Better visibility" },
      { id: 6, name: "Full Height Turnstiles", image:fhimage, description: "We are engaged in manufacturing, trading and supplying an extensive array of Turnstiles Full Height. These are specifically designed using the best grade factor inputs and sophisticated technology in compliance with the set universal norms. In order to meet clients’ exact requirements, we provide these products in varied shapes and sizes.Features:Durability,Perfect finish,High strength" }
    ],
    "Concealed Traffic Bollard": [
      { id: 7, name: "Concealed Traffic Bollard", image: ConcealedTrafficBollardimage, description: "Being the leading name in the industry, we are offering our customers a wide variety of Concealed Traffic Bollard. These traffic bollards are highly impressive and long lasting in nature. The offered traffic bollards have superb technical specifications which make them highly valuable. Also, the offered range helps in allowing regulation of traffic into certain zones with high vertical flow. We provide these traffic bollards in different sizes and shapes. High grade material is used while manufacturing these products.Features:High and break-in resistance,Increases security,Long lasting" },
      { id: 8, name: "Traffic Bollards", image:TrafficBollardsimage, description: "Being the leading name in the industry, we are offering our customers a wide variety of Traffic Bollard. These traffic bollards are highly impressive and long lasting in nature. The offered traffic bollards have superb technical specifications which make them highly valuable. Also, the offered range helps in allowing regulation of traffic into certain zones with high vertical flow. We provide these traffic bollards in different sizes and shapes. High grade material is used while manufacturing these products.Features:High and break-in resistance,Increases security,Long lasting" },
    ],
    "Surveillance System": [
      { id: 9, name: "CCTV Camera System", image:CCTVCameraSystemimage, description: "We are the leading manufacturer, trader and supplier of a comprehensive assortment of CCTV Camera Systems. These systems are fabricated using superior quality raw material and advanced technology. Rigorously tested on various parameters by our quality controllers, these are available in variegated sizes and patterns as per the varied demands of clients. In addition to this, the offered systems can also be availed by clients from us at the most reasonable prices.Features:Reliable performance,Compact design,User-friendliness" },
      { id: 10, name: "Surveillance System", image:SurveillanceSystemimage, description: "Backed by a team of adroit professionals, we have emerged as the leading manufacturer, trader and supplier of a broad range of Surveillance Systems. These are manufactured using superior quality raw material and latest technology under the supervision of our quality controllers. The offered systems are designed with high precision in order to meet the international quality standards.Features:Durable finish,Optimum performance,Longer service life" },
   
    ],
    "Gate Automation": [
      { id: 11, name: "Sliding Gate Operator", image:SlidingGateOperatorimage, description: "We are providing our customers a good range of Sliding Gate Operator in order to built safe and healthy living. This gate operator can be used at places where limited space and high tech security is required. The product is also used in the military areas to increase the security of soldiers and commandos. Also, we provide this gate operator at very affordable prices.Features:High traffic applications,Encoder based movement system,Advanced micro processor control,Anti Crash Features." },
      { id: 12, name: "Swing Gate Operator", image:SwingGateOperatorimage, description: "Being the most established manufacturer, trader and supplier, we are providing a wide variety of Swing Gate Operator. This gate operator is easy to install as well as convenient to handle using remote controllers. The offered range is flexible in order to open and close in inward as well as outward directions. Our customers can find the offered gate operator with fast operating speed.Features:Reduced size leaves,Hydraulic operator,Anti-crush systems" },
   
    ],
    "Road Blocker": [
      { id: 13, name: "Electromechanical Road Blocker", image:ElectromechanicalRoadBlockerimage, description: "We are engaged in offering a qualitative assortment of Road Blocker Electromechanical. Most of the convenient thing in road blocker electromechanical is that blocker is to be fixed in a pit or surface to be fixed. This range is widely used in government buildings, embassies, military sites, storage center, airports, etc. Clients can avail the offered range from us at market leading prices.Features:Robustness,Product designed for industrial environment,Huge strength impact,50 Ton Impact Capacity,Crash Rated K4 and K 12,Intensive Use,Security:Controls in a separate housing,Effective resistance of the obstacle" },
      { id: 14, name: "Hydraulic Road Blocker", image:HydraulicRoadBlockerimage, description: "With the assistance of our team of professionals, we are engaged in offering Road Blocker Hydraulic to overcome vehicle attack. The offered range helps in high security requirements. This range is designed using high grade raw material and advanced technology in order to fulfill clients varied requirements for security system. The offered range is designed for industrial environment and security controls. This range is used in various places like storage center, embassies, military sites, airports, etc.Features:Low maintenance,Extended durability,Compact construction" },
    ],
    "Shutter Automation": [
      { id: 15, name: "Tubular Motors For Roller Shutter", image:TubularMotorsRollerShutterimage, description: "Being the most established name in the industry, we are indulged in manufacturing, trading and supplying the best quality Tubular Motors for Roller Shutter. These motors are highly impressive and are used by remote controllers. Also, the offered motors are also used for projection screens, garage screens and are easy to fix in homes & at office automation. Customer can find the product in various customized options as per the needs of the patrons.Features:Small rolling drills,Waterproof,Protected by thermal effect." },
      { id: 16, name: "Shutter Automation", image:ShutterAutomationimage, description: "With rich industry experience and knowledge, we are known as the leading manufacturer, trader and supplier of Shutter Automation products that are highly demanded by our clients for its wide applications in domestic as well as industrial level. We are offering these products in various sizes, dimensions and other related specifications. These are easy to maintain and can be easily installed.Features:Durable,Compatible,High strength" },
   
    ]
  };

  const handleProductClick = (product) => {
    // Navigate to product detail page with product data in state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf4] to-[#fffdf8] text-[#3e2c1c]">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#bfa27a] to-[#d6b982] py-20 text-[#fff9f0] text-center shadow-[0_8px_30px_rgba(191,162,122,0.15)]">
        <h1 className="text-5xl font-serif font-bold mb-4">Our Products</h1>
        <p className="text-xl font-medium">Innovative solutions for every industry</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {Object.entries(products).map(([category, items], catIndex) => (
          <div key={catIndex} className="mb-28">
            <h2 className="text-4xl font-serif font-bold mb-12 border-l-4 border-[#bfa27a] pl-6 text-[#3e2c1c]">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {items.map((product) => (
               <div
  key={product.id}
  onClick={() => handleProductClick(product)}
  className="bg-[#fff9f0] rounded-xl shadow-sm border border-[#eaddc8] overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-lg transition-all duration-500"
>
  <div className="h-40 w-full bg-[#fffaf4] flex items-center justify-center overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
      loading="lazy"
    />
  </div>

  <div className="p-5">
    <h3 className="text-lg font-serif font-bold mb-2 text-[#3e2c1c]">
      {product.name}
    </h3>
    <p className="text-[#5c4633] text-xs">Click to view details</p>
  </div>
</div>

              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;