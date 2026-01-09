import { ArrowRight } from 'lucide-react';
import React from 'react';

const CloudMiddleware = () => {
  const platformFeatures = [
    {
      title: "Scalable Device Management",
      description: "Manage thousands of IoT devices with centralized control and monitoring",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Advanced Data Processing",
      description: "Real-time data analysis, filtering, and transformation capabilities",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Secure Integration APIs",
      description: "RESTful APIs and MQTT support for seamless enterprise integration",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "AI/ML Analytics",
      description: "Predictive analytics and machine learning for smart decision-making",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }
  ];

  const integrationOptions = [
    "Edge devices and industrial sensors",
    "AWS, Azure, and Google Cloud platforms",
    "ERP, MES, and CRM systems",
    "SCADA and building automation",
    "AI and big data analytics platforms"
  ];

  return (
    <>
      {/* 1. Hero Section with Background Image */}
      <section 
        className="relative min-h-[550px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/LoRaWAN-Cloud-Middleware-Platforms.webp')" }}
      >
        {/* Dark Semi-Transparent Overlay for Legibility */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-left">
            {/* Heading matched to screenshot */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Advance Industrial IoT<br /> with LoRaWAN Cloud<br /> Platforms
            </h1>
            
            {/* Sub-text matched to screenshot */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Build secure, scalable LoRaWAN infrastructures using LoRaWANTech’s 
              cloud and middleware technologies for smart, connected operations.
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

      {/* 2. Descriptive Section (Moved from Hero for better layout) */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl text-gray-700 text-lg leading-relaxed">
            <p>
              

LoRaWAN Cloud & Middleware Platforms play a critical role in managing, processing, and integrating data across IoT devices and network environments. These platforms provide scalable backend support for seamless communication between devices and applications, empowering real-time decision-making, remote control, and reliable data processing. Designed to simplify large-scale IoT deployments, LoRaWAN cloud platforms offer secure device management, intelligent routing, and advanced analytics.

LoRaWANTech provides robust LoRaWAN Cloud & Middleware Platforms tailored for industrial and enterprise use across North America. As a trusted B2B partner, we enable organizations to achieve operational visibility, system efficiency, and full-scale IoT integration. Through cutting-edge technologies, reliable support, and continuous innovation, we help clients build a strong foundation for connected infrastructure.

            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN Cloud & Middleware Platforms</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRaWAN Cloud & Middleware Platforms, we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc
            </p>
          </div>

          {/* Platform Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Integration Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Seamless Integration Capabilities</h3>
                <p className="text-gray-700 mb-6">
                  Our solutions are compatible with existing LoRaWAN architectures and help modernize legacy 
                  networks for future-ready operations across diverse industrial environments.
                </p>
                <div className="space-y-3">
                  {integrationOptions.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Rapid Deployment</h4>
                    <p className="text-sm text-gray-600">Quick device provisioning and network setup</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Reduced Latency</h4>
                    <p className="text-sm text-gray-600">Enhanced insights through optimized data flow</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Operational Efficiency</h4>
                    <p className="text-sm text-gray-600">Intelligent routing and centralized management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Precision Agriculture</h4>
                <p className="text-gray-600 text-sm">
                  Nebraska farming company improved soil monitoring and irrigation efficiency with cloud-based 
                  LoRaWAN platform, enhancing crop yield forecasting.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Municipal Utilities</h4>
                <p className="text-gray-600 text-sm">
                  Water utility achieved 35% operational cost reduction through centralized monitoring 
                  and real-time leak detection across urban and rural areas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Buildings</h4>
                <p className="text-gray-600 text-sm">
                  British Columbia integrator unified sensor data, HVAC control, and energy monitoring 
                  with middleware solution for streamlined automation.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to optimize your connected operations?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact LoRaWANTech for expert guidance, tailored solutions, and next-generation product support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Get Platform Demo
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                View Integration Guide
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
          Ready to optimize your connected <br /> operations with scalable LoRaWAN cloud infrastructure?
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

export default CloudMiddleware;