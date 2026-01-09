import { ArrowRight } from 'lucide-react';
import React from 'react';

const NetworkServersLNS = () => {
  const serverFeatures = [
    {
      title: "Scalable Architecture",
      description: "Handle thousands to millions of devices with distributed server architecture",
      details: [
        "Multi-tenant support for isolated environments",
        "Load balancing across server clusters",
        "Automatic failover and redundancy",
        "Dynamic resource allocation"
      ]
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security compliant with LoRaWAN 1.0.4 and 1.1 standards",
      details: [
        "AES-128 end-to-end encryption",
        "Secure key management and rotation",
        "MIC validation and integrity checks",
        "Role-based access control"
      ]
    },
    {
      title: "Comprehensive Management",
      description: "Complete visibility and control over your LoRaWAN network infrastructure",
      details: [
        "Real-time network analytics and monitoring",
        "Device registry and configuration management",
        "MAC command scheduling and optimization",
        "OTA firmware update management"
      ]
    }
  ];

  return (
    <>
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRa-Network-Servers-LNS.webp')" }}
  >
    {/* Dark Overlay to match the high-tech server room aesthetic in serve.jpg */}
    <div className="absolute inset-0 bg-slate-900/80"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Optimize IoT<br /> Infrastructure with<br /> Scalable LoRa<br /> Network Servers
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          LoRaWANTech's LoRa Network Server solutions provide secure, centralized 
          routing and control for LoRaWAN device communication and data flow.
        </p>
        
        {/* Contact Us Button - Dark Navy Style exactly as seen in serve.jpg */}
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
          

LoRa Network Servers (LNS) are essential components within LoRaWAN architecture, responsible for managing message routing between gateways and application servers. These servers oversee device registration, uplink/downlink message flow, MAC command handling, and adaptive data rate control. LNS platforms are built for scalability, offering robust, centralized coordination of thousands—or even millions—of devices across complex deployments.

Designed for private and public networks alike, LoRa Network Servers ensure reliable performance, advanced diagnostics, and secure communication across industrial, municipal, and commercial environments.

LoRaWANTech serves as a trusted B2B provider for companies across North America seeking to deploy, expand, or optimize LoRaWAN networks. Through rigorous quality assurance, expert support, and deep technological partnerships, we provide advanced LNS platforms that support mission-critical operations. Our Detroit-based team helps businesses streamline network performance and unlock the full power of scalable IoT.

        </p>
      </div>
    </div>
  </section>
</div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRa Network Servers (LNS)</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRa Network Servers (LNS), we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serverFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integration Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Seamless Integration</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Compatible Systems</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">LoRaWAN Gateways from multiple vendors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Application Servers and IoT dashboards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cloud environments (AWS, Azure, Google Cloud)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">ERP systems and machine learning engines</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Deployment Options</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Cloud-Hosted</h5>
                    <p className="text-sm text-gray-600">Fully managed LNS-as-a-Service with automatic scaling</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">On-Premise</h5>
                    <p className="text-sm text-gray-600">Complete control with local installation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Hybrid</h5>
                    <p className="text-sm text-gray-600">Combined approach for maximum flexibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="mb-12 bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Success Story: Arizona Water Authority</h3>
                <p className="text-gray-700 mb-4">
                  Deployed our LNS platform across 35,000 residential water meters, achieving 28% reduction in water loss 
                  and $1.2 million in annual operational cost savings through real-time routing and leak detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">35,000 devices</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">28% water savings</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">$1.2M annual savings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to enhance your network performance?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team for a tailored consultation, system design assistance, or deployment support.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Request LNS Consultation
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
          Ready to enhance your LoRaWAN network <br /> performance with reliable routing and centralized management?
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

export default NetworkServersLNS;