import { ArrowRight } from 'lucide-react';
import React from 'react';

const GatewaysIndoorOutdoor = () => {
  const gatewayTypes = [
    {
      title: "Indoor Gateways",
      description: "Compact and energy-efficient devices for smart buildings, manufacturing floors, and commercial complexes.",
      features: [
        "Centralized network bridging in dense indoor deployments",
        "Low-profile design for office and industrial environments",
        "PoE (Power over Ethernet) support for easy installation",
        "Seamless integration with building automation systems"
      ],
      applications: ["Smart buildings", "Manufacturing floors", "Commercial complexes", "Healthcare facilities"]
    },
    {
      title: "Outdoor Gateways",
      description: "Rugged, IP-rated enclosures designed for agriculture, transportation hubs, and municipal environments.",
      features: [
        "IP67-rated for dust and water resistance",
        "UV-resistant materials for long-term outdoor use",
        "Wide temperature range operation (-40°C to +70°C)",
        "Solar-ready with battery backup options"
      ],
      applications: ["Agricultural monitoring", "Transportation hubs", "Municipal networks", "Remote infrastructure"]
    }
  ];

  const caseStudies = [
    {
      title: "Vineyard Optimization in Napa Valley",
      description: "Deployed outdoor LoRaWAN gateways with soil moisture sensors across 120 acres, reducing water use by 35% and increasing yield by 20%."
    },
    {
      title: "Municipal Waste Management in Florida",
      description: "Installed gateways on public buildings connected to waste bin sensors, reducing unnecessary pickups by 45% and lowering operational costs."
    },
    {
      title: "Mining Operations in British Columbia",
      description: "Deployed rugged gateways in remote oil sands facilities, enabling reliable equipment tracking despite harsh winter conditions."
    }
  ];

  return (
    <>
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRaWAN-indoor-Gateways.webp')" }}
  >
    {/* Dark Overlay to match the depth of indoor.jpg */}
    <div className="absolute inset-0 bg-slate-900/75"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Reliable, Long-Range IoT<br /> with LoRaWAN Indoor &<br /> Outdoor Gateways
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          Build smarter infrastructure with LoRaWANTech's LoRaWAN Gateways—delivering 
          secure, scalable wireless connectivity across vast environments.
        </p>
        
        {/* Contact Us Button - Styled to match indoor.jpg */}
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
          

LoRaWAN Gateways serve as critical access points within long-range, low-power wireless networks, enabling seamless communication between field sensors and cloud platforms. Positioned at the edge of IoT environments, these devices aggregate and forward data packets from thousands of nodes, ensuring reliable connectivity over miles of terrain. Whether for indoor use in controlled environments or outdoor deployments in rugged conditions, LoRaWAN gateways offer a robust backbone for scalable IoT systems.

LoRaWANTech supports industrial and enterprise customers throughout North America with state-of-the-art LoRaWAN gateway solutions built to meet growing connectivity demands. As a leading B2B technology provider, we combine innovation with proven reliability, helping organizations streamline data flow, automate operations, and enhance remote visibility. Backed by our Detroit-based team, LoRaWANTech’s solutions reflect our commitment to performance, durability, and expert-driven deployment support for next-gen IoT infrastructure.

        </p>
      </div>
    </div>
  </section>
</div>

      {/* Gateway Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
Core Components of LoRaWAN Gateways
</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              

In addition to offering products and systems developed by our team and trusted partners for LoRaWAN Gateways (Indoor/Outdoor), we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {gatewayTypes.map((gateway, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{gateway.title}</h3>
                <p className="text-gray-600 mb-6">{gateway.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {gateway.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Ideal Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {gateway.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Performance</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Long-range coverage: 15+ miles rural</li>
                  <li>• High throughput: 1000+ messages/sec</li>
                  <li>• Multi-channel support: 8-64 channels</li>
                  <li>• Adaptive Data Rate (ADR) enabled</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Connectivity</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Ethernet, Wi-Fi, cellular, satellite</li>
                  <li>• AES end-to-end encryption</li>
                  <li>• OTA (over-the-air) updates</li>
                  <li>• Local buffering capability</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Environmental</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• IP67 rating for outdoor units</li>
                  <li>• -40°C to +70°C operating range</li>
                  <li>• UV and corrosion resistant</li>
                  <li>• Low power consumption</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real-World Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{study.title}</h4>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to improve your IoT coverage?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team for expert guidance, hardware recommendations, or customized solutions tailored to your operational needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Contact Our Gateway Experts
            </button>
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
          Ready to improve your IoT coverage and <br /> reliability with advanced gateway technology?
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

export default GatewaysIndoorOutdoor;