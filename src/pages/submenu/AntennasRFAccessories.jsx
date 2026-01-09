import { ArrowRight } from 'lucide-react';
import React from 'react';

const AntennasRFAccessories = () => {
  const accessories = [
    {
      title: "Directional Antennas",
      description: "High-gain directional antennas for long-range point-to-point links and focused coverage applications.",
      specs: ["9-12 dBi gain for extended range", "N-Type connectors for minimal loss", "Weatherproof IP67-rated housing", "Adjustable mounting brackets"],
      range: "Up to 20 km line-of-sight"
    },
    {
      title: "Omni-directional Antennas",
      description: "360° coverage antennas designed for general network deployment and broad area coverage.",
      specs: ["3-6 dBi gain for balanced performance", "SMA connectors for flexible installation", "UV-resistant outdoor materials", "Lightweight compact design"],
      range: "Up to 10 km urban coverage"
    },
    {
      title: "RF Cables & Connectors",
      description: "Professional-grade coaxial cables and connectors engineered for minimal signal loss.",
      specs: ["LMR-400/600 low-loss cables", "N-Type/SMA professional connectors", "Low VSWR (<1.5:1) specifications", "Outdoor-rated durable construction"],
      range: "Various lengths 0.5m to 30m"
    },
    {
      title: "Mounting & Installation Hardware",
      description: "Complete mounting solutions for secure antenna installation in all environmental conditions.",
      specs: ["Pole mounts for various diameters", "Wall brackets with tilt adjustment", "Complete mast kits with hardware", "Lightning protection grounding kits"],
      range: "Universal compatibility"
    }
  ];

  return (
    <>
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRa-Antennas-RF-Accessories.webp')" }}
  >
    {/* Dark Overlay to match antena.jpg */}
    <div className="absolute inset-0 bg-slate-900/75"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Empower Your Operations<br /> with Advanced LoRa<br /> Antennas & RF<br /> Accessories
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          Explore LoRaWANTech’s robust LoRa Antennas & RF Accessories—designed for 
          reliable, scalable, and seamless wireless IoT connectivity
        </p>
        
        {/* Contact Us Button - Dark Navy Style as seen in antena.jpg */}
        <a 
          href="/contact" 
          className="inline-flex items-center bg-[#0f172a] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-black transition-all group"
        >
          Contact Us
          <div className="ml-3 border border-white/50 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  </section>

  {/* 2. Description Section (White Background) */}
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-5xl text-gray-800 text-lg leading-relaxed">
        <p>
          LoRa Antennas & RF Accessories are essential technologies that enable reliable, long-range, and low-power wireless communications for IoT and industrial applications. These solutions support secure data transfer between devices and networks, even in challenging environments, ensuring seamless connectivity for smart operations. Leveraging these technologies helps businesses monitor, manage, and automate their processes effectively while reducing costs and energy consumption.
LoRaWANTech supports businesses across North America with cutting-edge LoRa Antennas & RF Accessories tailored for B2B markets. As a trusted technology leader headquartered in Detroit, Michigan, we deliver innovative products and systems backed by rigorous quality assurance and customer-centric support. Our scalable, high-performance solutions are designed to unlock the full potential of your IoT and RF deployments.
        </p>
      </div>
    </div>
  </section>
</div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRa Antennas & RF Accessories</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRa Antennas & RF Accessories, we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessories.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{item.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 text-center">Key Specifications:</h4>
                  <ul className="space-y-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Typical Range:</span>
                    <span className="text-blue-700 font-bold text-lg">{item.range}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional RF Design Support</h3>
            <p className="text-gray-700 mb-6">
              Our RF engineering team provides comprehensive design support including site surveys, link budget analysis, 
              and antenna placement optimization. We ensure your LoRaWAN network achieves optimal coverage with minimal 
              interference.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Request Site Survey
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-lg transition-colors">
                Download RF Design Guide
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies & CTA Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Case Studies Header */}
    <h2 className="text-3xl font-bold text-[#1a639b] mb-10">Case Studies</h2>

    {/* Case Study Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 1 – USA: Smart Agriculture Deployment (Iowa)
      </button>
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 2 – USA: Utility Monitoring System (Colorado)
      </button>
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 3 – Canada: Cold Chain Monitoring (British Columbia)
      </button>
    </div>

    {/* Case Study Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-20">
      A large-scale agribusiness in Iowa implemented LoRaWANTech’s LoRaWAN end devices to monitor soil 
      moisture and crop health over 1,200 acres. The system, powered by solar-assisted nodes and 
      GAO Tek Inc. sensors, resulted in a 30% water savings and significantly improved crop 
      yield forecasting.
    </p>

    {/* Bottom CTA Card */}
    <div 
      className="relative rounded-[2.5rem] overflow-hidden bg-cover bg-center min-h-[380px] flex items-center"
      style={{ backgroundImage: "url('/images/lorawan-cta.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-8 md:p-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Ready to enhance your operations with reliable LoRa Antennas & RF Accessories?<br /> End Devices for your IoT strategy?
        </h2>
        
        <p className="text-lg text-gray-200 mb-10 max-w-2xl">
          Contact LoRaWANTech to speak with our technical specialists, request quotes, 
          or explore customized deployment solutions.
        </p>

        {/* Contact Us Button - White Style */}
        <a 
          href="/contact" 
          className="inline-flex items-center bg-white text-gray-900 px-7 py-3 rounded-md font-bold text-base hover:bg-gray-100 transition-all group"
        >
          Contact Us
          <div className="ml-3 border border-gray-900 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>

  </div>
</section>
    </>
  );
};

export default AntennasRFAccessories;