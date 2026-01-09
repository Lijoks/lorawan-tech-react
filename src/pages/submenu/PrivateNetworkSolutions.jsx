import { ArrowRight } from 'lucide-react';
import React from 'react';

const PrivateNetworkSolutions = () => {
  const networkComponents = [
    {
      title: "LoRaWAN Gateways",
      description: "Industrial-grade multi-channel gateways for robust indoor and outdoor coverage",
      features: ["8-16 channel capacity", "IP67 rated enclosures", "PoE and solar power options", "High-gain antennas"],
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Network Servers",
      description: "On-premise or virtualized systems for local data processing and control",
      features: ["Local data sovereignty", "Custom rule engines", "High availability clustering", "Real-time analytics"],
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "End-Node Devices",
      description: "Sensors and actuators for diverse monitoring applications",
      features: ["Temperature/humidity sensors", "Motion detection", "Asset tracking", "Environmental monitoring"],
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  const benefits = [
    {
      title: "Complete Network Control",
      description: "No reliance on public LoRaWAN operators with full ownership of infrastructure"
    },
    {
      title: "Enhanced Security",
      description: "Data sovereignty and AES-128 encryption for sensitive industrial applications"
    },
    {
      title: "Cost Efficiency",
      description: "License-free spectrum usage reduces long-term connectivity costs"
    },
    {
      title: "Flexible Architecture",
      description: "Customizable solutions tailored to specific industrial requirements"
    }
  ];

  return (
    <>
      {/* 1. Hero Section with Background Image */}
      <section 
        className="relative min-h-[550px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Private-LoRaWAN-Network-Solutions.webp')" }}
      >
        {/* Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-left">
            {/* Heading matched to screenshot */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Private LoRaWAN<br /> Networks for Industrial-<br />Grade Smart Connectivity
            </h1>
            
            {/* Sub-text matched to screenshot */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Deploy secure, scalable, and reliable LoRaWAN infrastructures with LoRaWANTech’s 
              end-to-end private networking solutions for enterprises.
            </p>
            
            {/* Contact Us Button with Icon */}
            <a 
              href="/contact" 
              className="inline-flex items-center bg-[#0B1C33] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-black transition-all group"
            >
              Contact Us
              <div className="ml-3 border border-white/40 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Descriptive Section (Following the clean layout from reference images) */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl text-gray-700 text-lg leading-relaxed">
            <p>
              

Private LoRaWAN (Long Range Wide Area Network) solutions provide enterprises with the flexibility to deploy and manage their own dedicated wireless communication networks. Ideal for smart cities, industrial IoT, and campus-wide applications, these networks ensure low power consumption, extended range, and robust data security. Designed to support thousands of devices and sensors, private LoRaWAN networks offer cost-effective deployment without dependency on public infrastructure.

LoRaWANTech delivers comprehensive Private LoRaWAN Network Solutions tailored to meet the demands of North American B2B operations. With our expertise in connectivity and digital infrastructure, businesses gain the tools to streamline operations, gather real-time data, and improve system-wide efficiency. Through strategic partnerships, including GAO Tek Inc. and GAO RFID Inc., we ensure access to dependable and cutting-edge technologies.

            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of Private LoRaWAN Network Solutions</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for Private LoRaWAN Network Solutions, we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          {/* Network Components */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {networkComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={component.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-6">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Benefits of Private Networks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h3>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Specification</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Communication Range", "Up to 15 km line-of-sight", "Wide area coverage with minimal infrastructure"],
                    ["Device Capacity", "Thousands of endpoints per gateway", "Scalable for large deployments"],
                    ["Power Consumption", "Ultra-low for battery devices", "5-10 year battery life achievable"],
                    ["Security", "AES-128 end-to-end encryption", "Industrial-grade data protection"],
                    ["Uplink/Downlink", "Bi-directional communication", "Remote control and configuration"],
                    ["OTA Updates", "Over-the-air firmware updates", "Remote maintenance and feature upgrades"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row[0]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[1]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">California Farming Enterprise</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Achieved 30% reduction in water usage and 15% increase in crop yield through data-driven 
                  irrigation and fertilization practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">30% water savings</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">15% yield increase</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Midwest University Campus</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Implemented campus-wide network across 25 buildings, reducing energy consumption by 22% 
                  through centralized monitoring and control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">25 buildings</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">22% energy savings</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Canadian Utility Company</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Upgraded legacy monitoring system for remote meter reading and leak detection, 
                  reducing operational response time by 40%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">40% faster response</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Improved service metrics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to build your private LoRaWAN infrastructure?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us to learn how LoRaWANTech can help design, deploy, and manage a secure, scalable, 
              high-performance wireless network tailored to your specific needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Contact Network Specialists
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
          Ready to build your private LoRaWAN<br />  infrastructure or need more information?
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

export default PrivateNetworkSolutions;